import {VITE_DB_PATH, VITE_STRIPE_SECRET_KEY, VITE_STRIPE_WEBHOOK_SECRET_KEY} from '$env/static/private';
import {json} from '@sveltejs/kit';
import Pocketbase from 'pocketbase'
import Stripe from 'stripe';

const pb = new Pocketbase(VITE_DB_PATH)

const stripe = new Stripe(VITE_STRIPE_SECRET_KEY, {apiVersion: '2022-11-15'})
const whsec = VITE_STRIPE_WEBHOOK_SECRET_KEY;

/**
 * Create a project transaction log
 * @param {string} projectId - The ID of the project
 * @param {number} amount - The transaction amount
 * @param {string} transactionId - The transaction ID
 * @returns {Promise<void>}
 */
async function createProjectTransactionLog(projectId, amount, transactionId) {
  const projectSearch = await pb.collection('projects').getOne(projectId);
  const project = structuredClone(projectSearch);
  await pb.collection('transactions').create({
    project_id: project.id,
    amount: amount,
    transaction_id: transactionId,
  });
  await pb.collection('projects').update(projectId, {
    funding: projectSearch?.funding + amount
  });
}

/**
 * Fulfill an order by processing each line item in the session.
 * For each line item, the associated product metadata is retrieved.
 * If the product type is 'project', create a project transaction log
 * using the `createProjectTransactionLog` function.
 * This separate function takes the project ID, transaction amount,
 * and transaction ID as its arguments, and updates the project's
 * funding with the transaction amount.
 *
 * @async
 * @param {Stripe.Response<Stripe.Checkout.Session>} sessionWithLineItems -
 *     Stripe Checkout Session with line items
 * @returns {Promise<void>}
 */
const fulfillOrder = async (sessionWithLineItems) => {
  // Process each line item in the session
  sessionWithLineItems.line_items?.data.forEach(async (item) => {
    // Get Line Item Product Metadata
    const productId = item.price?.product;
    const product = await stripe.products.retrieve(productId);
    const productType = product.metadata['product-type'];

    // Handle different product types
    switch (productType) {
      case 'project':
        await createProjectTransactionLog(
            product.metadata['project-id'], item.amount_total, item.id);
        break;

      default:
        break;
    }
  });
};

/**
 * Handle a POST request for processing Stripe webhook events.
 * Verifies the Stripe signature and processes the 'checkout.session.completed'
 * event. Retrieves the session with line items and fulfills the order.
 *
 * @async
 * @param {Request} request - The incoming request object
 * @returns {Promise<{body: string, status: number}>} - The response object with
 *     a status code and a JSON body
 */
export const POST = async ({request}) => {
  try {
    const data = await request.text();
    const sig = await request.headers.get('stripe-signature');

    const event = await stripe.webhooks.constructEventAsync(data, sig, whsec);

    console.log(data)
    console.log(sig)

    if (VITE_STRIPE_WEBHOOK_SECRET_KEY &&
        event.type === 'checkout.session.completed') {
      const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
          event.data.object?.id, {expand: ['line_items']});
      await fulfillOrder(sessionWithLineItems);
    }

    return json({status: 200});
  } catch (err) {
    console.error(err.message);
    return json({status: 400, message: 'Webhook Error: ' + err.message});
  }
};

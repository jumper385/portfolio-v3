import {VITE_STRIPE_SECRET_KEY} from '$env/static/private';
import {redirect} from '@sveltejs/kit';
import Pocketbase from 'pocketbase';
import Stripe from 'stripe';

const stripe = new Stripe(VITE_STRIPE_SECRET_KEY, {apiVersion: '2022-11-15'})

const pb = new Pocketbase(import.meta.env.VITE_DB_PATH);

export const load =
    async () => {
  let out = await pb.collection('projects').getFullList(200);
  let projects = structuredClone(out);
  return {projects};
}

export const actions = {
  createCheckout: async ({request}) => {
    let session;
    let {price_code} = await request.json();

    try {
      session = await stripe.checkout.sessions.create({
        success_url: 'http://10.1.1.27:5173/projects',
        line_items: [{quantity: 1, price: price_code}],
        mode: 'payment',
        automatic_tax: {enabled: true}
      });

      throw 'Redirect'

    } catch (err) {
      if (err == 'Redirect') {
        throw redirect(303, session.url);
      }
      console.log(err.message)
    }
  }
}
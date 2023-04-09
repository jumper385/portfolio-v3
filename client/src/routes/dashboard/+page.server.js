import Pocketbase, {Record} from 'pocketbase';
const pb = new Pocketbase(import.meta.env.VITE_DB_PATH);

export const load = async ({cookies}) => {
  pb.authStore.loadFromCookie(cookies.get('userAuth'));

  let messages = await pb.collection('contact').getList(1, null, {});
  let articles = await pb.collection('blog').getList(1, null, {});

  let inbox = structuredClone(messages)
  let blog = structuredClone(articles)

  return {
    inbox, blog
  }
}
import Pocketbase from 'pocketbase';

const pb = new Pocketbase(import.meta.env.VITE_DB_PATH);

export const load = async () => {
  let out = await pb.collection('blog').getFullList(200);
  let blogs = structuredClone(out);
  return {blogs};
}
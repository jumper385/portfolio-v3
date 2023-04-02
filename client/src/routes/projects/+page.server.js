import Pocketbase from 'pocketbase';

const pb = new Pocketbase(import.meta.env.VITE_DB_PATH);

export const load = async () => {
  let out = await pb.collection('projects').getFullList(200);
  let projects = structuredClone(out);
  return {projects};
}
import Pocketbase from 'pocketbase';

const pb = new Pocketbase(import.meta.env.VITE_DB_PATH);

export const load = async ({params}) => {
  console.log(params)
  let out = await pb.collection('blog').getOne(params.id);

  await pb.collection('blog').update(out.id, {views: out.views + 1})

  let blog = structuredClone(out);
  return {blog};
}
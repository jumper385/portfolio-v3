import {addImageUrls} from '$lib/helpers/getImageUrls.js';
import Pocketbase from 'pocketbase';

const pb = new Pocketbase(import.meta.env.VITE_DB_PATH);

export const load = async ({params}) => {
  console.log(params.id)

  let out = await pb.collection('blog').getOne(params.id);
  let article = addImageUrls([structuredClone(out)], 'display', {})[0];

  pb.collection('blog').update(article.id, {views: article.views + 1})

  return {article};
}
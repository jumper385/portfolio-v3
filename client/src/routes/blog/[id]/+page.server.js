import {addImageUrls} from '$lib/helpers/getImageUrls.js';
import Pocketbase from 'pocketbase';

const pb = new Pocketbase(import.meta.env.VITE_DB_PATH);

export const load = async ({params}) => {
  let profile = await pb.collection('site_elements').getFirstListItem('', {})
  profile = addImageUrls(
      [structuredClone(profile)], 'landing_img', {thumb: '300x0'})[0];

  let out = await pb.collection('blog').getOne(params.id);
  let article =
      addImageUrls([structuredClone(out)], 'display', {thumb: '1500x0'})[0];

  pb.collection('blog').update(article.id, {views: article.views + 1})

  return {article, profile};
}
import {addCardUrl} from '$lib/helpers/getCardLink';
import {addImageUrls} from '$lib/helpers/getImageUrls';
import Pocketbase from 'pocketbase'
const pb = new Pocketbase(import.meta.env.VITE_DB_PATH);

export const load = async () => {
  try {
    let blog = structuredClone(
        await pb.collection('blog').getFullList(1, {sort: '-created'}));

    blog = addImageUrls(blog, 'display', {thumb: '0x1000'});
    blog = addCardUrl(blog, '/blog');

    console.log(blog);

    return {
      blog
    }
  } catch (error) {
    console.log(error.message)
  }
}
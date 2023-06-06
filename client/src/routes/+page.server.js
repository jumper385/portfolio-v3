import {addCardUrl} from '$lib/helpers/getCardLink';
import {addImageUrls} from '$lib/helpers/getImageUrls';
import Pocketbase from 'pocketbase'
const pb = new Pocketbase(import.meta.env.VITE_DB_PATH);

export const load = async () => {
  try {
    let {items: siteElements} =
        structuredClone(await pb.collection('site_elements').getList(1, 1));

    siteElements[0].landing_img =
        pb.getFileUrl(siteElements[0], siteElements[0].landing_img)

    let {items: projects} = structuredClone(
        await pb.collection('projects')
            .getList(1, 3, {sort: '-created', filter: 'featured = true'}));

    projects = addImageUrls(projects, 'display', {thumb: '1000x0'})

    let {items: blog} = structuredClone(await pb.collection('blog').getList(
        1, 3, {sort: '-created', filter: 'featured = true && visible = true'}));

    console.log(blog)

    blog = addImageUrls(blog, 'display', {thumb: '1000x0'})
    blog = addCardUrl(blog, '/blog');

    return {
      siteElements: siteElements[0], projects, blog
    }
  } catch (error) {
    console.log(error.message)
  }
}
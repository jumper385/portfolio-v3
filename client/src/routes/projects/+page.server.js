import {addImageUrls} from '$lib/helpers/getImageUrls';
import Pocketbase from 'pocketbase'
const pb = new Pocketbase(import.meta.env.VITE_DB_PATH);

export const load = async () => {
  try {
    let projects = structuredClone(
        await pb.collection('projects').getFullList(1, {sort: '-created'}));

    projects = addImageUrls(projects, 'display', {thumb: '0x1000'});

    return {
      projects
    }
  } catch (error) {
    console.log(error.message)
  }
}
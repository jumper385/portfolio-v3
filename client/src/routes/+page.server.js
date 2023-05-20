import Pocketbase from 'pocketbase'
const pb = new Pocketbase(import.meta.env.VITE_DB_PATH);

export const load = async () => {
  try {
    let out =
        await pb.collection('site_elements').getFullList(0, {sort: '-created'});
    return {
      ...out[0], landing_img: pb.getFileUrl(out[0], out[0].landing_img)
    }
  } catch (error) {
    console.log(error.message)
  }
}
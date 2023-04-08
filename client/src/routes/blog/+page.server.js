import Pocketbase from 'pocketbase';

const pb = new Pocketbase(import.meta.env.VITE_DB_PATH);

export const load = async () => {
  let out = await pb.collection('blog').getFullList(200);
  let blogs =
      out.map(e => ({
                id: e.id,
                author: e.author,
                title: e.title,
                displayImg: pb.getFileUrl(e, e.displayImg, {thumb: '0x1000'}),
                likes: e.likes,
                views: e.views,
                category: e.category,
              }))
  console.log(blogs)
  return {blogs};
}
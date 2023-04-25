import Pocketbase from 'pocketbase';

const pb = new Pocketbase(import.meta.env.VITE_DB_PATH);

export const load = async () => {
  let {items: out} = await pb.collection('blog').getList(
      1, 50, {filter: 'visible = true', sort: '-created'});
  console.log(out?.map(e => e.id))

  let blogs;

  if (out.length > 0) {
    blogs = out?.map(
        e => ({
          id: e.id,
          author: e.author,
          title: e.title,
          displayImg: pb.getFileUrl(e, e.displayImg, {thumb: '0x1000'}),
          likes: e.likes,
          views: e.views,
          category: e.category,
          created: e.created
        }))
  } else {
    blogs = []
  }

  return {blogs};
}
import {redirect} from '@sveltejs/kit';
import Pocketbase from 'pocketbase'

const pb = new Pocketbase(import.meta.env.VITE_DB_PATH);

export const handle = async ({event, resolve, fetch, request}) => {
  let token = event.cookies.get('sessionid')
  pb.authStore.loadFromCookie(token)
  console.log(pb.authStore.isValid)

  if (event.url.pathname.startsWith('/admin') &&
      event.url.pathname != '/admin/login') {
    if (!pb.authStore.isValid) {
      throw redirect(303, '/admin/login')
    }
  }

  const response = await resolve(event);
  return response;
}
import {redirect} from '@sveltejs/kit';
import Pocketbase from 'pocketbase'

const pb = new Pocketbase(import.meta.env.VITE_DB_PATH);

export const load =
    async ({cookies}) => {
  let token = cookies.get('sessionid');
  pb.authStore.loadFromCookie(token);
  try {
    if (pb.authStore.isValid) {
      throw 'Redirect'
    }
  } catch (err) {
    if (err == 'Redirect') {
      throw redirect(302, '/admin/profile')
    }
  }
}

export const actions = {
  login: async ({request, cookies}) => {
    try {
      let logindata = await request.formData();
      let username = logindata.get('username')
      let password = logindata.get('password')
      const authData =
          structuredClone(await pb.admins.authWithPassword(username, password));

      const authCookie = pb.authStore.exportToCookie();

      cookies.set('sessionid', authCookie)

      throw 'Success'

    } catch (err) {
      if (err == 'Success') {
        throw redirect(302, '/admin/profile')
      }
    }
  }
}
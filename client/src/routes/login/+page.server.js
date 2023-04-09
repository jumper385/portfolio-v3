import {redirect} from '@sveltejs/kit';
import Pocketbase from 'pocketbase';

const pb = new Pocketbase(import.meta.env.VITE_DB_PATH);

export const actions = {
  login: async ({request, cookies}) => {
    let res = await request.formData()
    let email = res.get('email')
    let password = res.get('password')

    console.log(email, password)

    let authData = await pb.admins.authWithPassword(email, password)
    let {record, token} = authData

    cookies.set('userAuth', pb.authStore.exportToCookie())
    throw redirect(303, '/dashboard')
  }
}
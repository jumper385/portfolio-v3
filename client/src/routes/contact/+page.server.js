import {goto} from '$app/navigation';
import {redirect} from '@sveltejs/kit';
import Pocketbase from 'pocketbase';

const pb = new Pocketbase(import.meta.env.VITE_DB_PATH);

export const actions = {
  contact: async ({request}) => {
    let res = await request.formData()
    let out = await pb.collection('contact').create({
      first_name: res.get('first_name'),
      last_name: res.get('last_name'),
      email: res.get('email'),
      content: res.get('content')
    })
    throw redirect(303, '/contact/success/' + structuredClone(out).id)
  }
}
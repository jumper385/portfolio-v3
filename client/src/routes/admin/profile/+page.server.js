import {redirect} from '@sveltejs/kit';
import Pocketbase from 'pocketbase'

const pb = new Pocketbase(import.meta.env.VITE_DB_PATH);

export const load = async ({cookies}) => {
  pb.authStore.loadFromCookie(cookies.get('sessionid'));
  let profile = structuredClone(pb.authStore.model);
  return {
    profile
  }
}
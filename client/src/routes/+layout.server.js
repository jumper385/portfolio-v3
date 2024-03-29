import Pocketbase, {Record} from 'pocketbase';

const pb = new Pocketbase(import.meta.env.VITE_DB_PATH);

export const load = async ({cookies}) => {
  pb.authStore.loadFromCookie(cookies.get('sessionid'));
  if (pb.authStore.isValid) {
    return ({admin: true})
  }
}
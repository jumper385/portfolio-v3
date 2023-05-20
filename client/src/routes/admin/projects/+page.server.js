import {redirect} from '@sveltejs/kit';
import Pocketbase from 'pocketbase'

const pb = new Pocketbase(import.meta.env.VITE_DB_PATH);

export const load = async ({cookies}) => {

}
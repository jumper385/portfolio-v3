import {error} from '@sveltejs/kit'

export const load = async ({cookies}) => {
  const sessionid = cookies.get('sessionid')
  if (!sessionid) {
    throw error(404, 'Not Found')
  }
}
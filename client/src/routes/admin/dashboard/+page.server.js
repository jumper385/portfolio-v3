import {redirect} from '@sveltejs/kit';
import Pocketbase from 'pocketbase'

const pb = new Pocketbase(import.meta.env.VITE_DB_PATH);

export const load =
    async () => {
  try {
    let out =
        await pb.collection('site_elements').getFullList(0, {sort: '-created'});
    return {
      ...out[0]
    }
  } catch (error) {
    console.log(error.message)
  }
}

export const actions = {
  updateElements: async ({cookies, request}) => {
    try {
      pb.authStore.loadFromCookie(cookies.get('sessionid'))

      console.log('new data')

      let data = await request.formData()
      console.log(data.get('landingImg'))
      let existingEntry = await pb.collection('site_elements').getFullList(0, {
        sort: '-created'
      });

      // Update Text Fields

      let entryUpdate =
          await pb.collection('site_elements').update(existingEntry[0].id, {
            site_title: data.get('siteName'),
            slogan: data.get('slogan'),
            skills: data.get('skills'),
          })

      // Update File Fields if Needed
      let formData = new FormData();
      console.log(data)
      if (data.get('landingImg')) {
        let file = data.get('landingImg')?.valueOf()
        console.log(file.size)

        let fileUpdate =
            await formData
                .append('landing_img', data.get('landingImg').valueOf())
                    await pb.collection('site_elements')
                .update(existingEntry[0].id, formData)

        console.log(fileUpdate)
      }

      console.log(entryUpdate)

      throw 'success'
    } catch (err) {
      switch (err) {
        case 'success':
          throw redirect(302, '/admin/dashboard')
          break;

        default:
          console.log(err.message)
          throw redirect(304, '/admin/dashboard')
          break;
      }
    }
  }
}
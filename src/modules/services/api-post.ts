import { mensajesApi } from './api'
import { type IMensajes } from '@/modules/portafolio/interfaces/mensajes.interface'

const postMessages = async (payload: IMensajes) => {

    const resp = await fetch(`${mensajesApi}/form-messages/send`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
          credentials: 'include',
    })
    if (!resp.ok) {
      const errors  = await resp.json()
      throw errors;
    }
    const data = await resp.json()
    return data

}
export { postMessages }

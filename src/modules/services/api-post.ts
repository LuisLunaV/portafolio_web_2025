import { mensajesApi } from './api'
import { type IMensajes } from '@/modules/portafolio/interfaces/mensajes.interface'

const postMessages = async (payload: IMensajes) => {
  try {

    const resp = await fetch(`${mensajesApi}/form-messages/send`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
        "Bypass-Tunnel-Reminder": "true"
      },
    })
    if (!resp.ok) {
      const { errors } = await resp.json()
      throw errors[0]
    }
    const data = await resp.json()
    return data
  } catch (error) {
    throw error
  }
}
export { postMessages }

import { mensajesApi } from './api'
const isApiOnline = async() => {
  try {
  const resp = await fetch(`${mensajesApi}/bandeja`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "Bypass-Tunnel-Reminder": "true"
    },
  });

  if( !resp.ok){
    const error = resp.json();
    throw error;
  }

  const data = resp.json();
  return data;

  } catch (error) {
    throw error;
  }

}

export { isApiOnline };

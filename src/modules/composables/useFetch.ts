import { ref } from 'vue'
import { tecnologias, type ITecnologia } from '@/json/tecnologias';
import { proyectos, type IProyectos} from '@/json/proyectos';
import { servicios, type IServicios} from '@/json/servicios';
import { postMessages } from '@/modules/services/api-post';
import { type IMensajes, type IErrorMsg } from '@/modules/portafolio/interfaces/mensajes.interface';
export const useFetch =()=>{

  const error = ref<IErrorMsg|null>(null);
  const isLoading = ref<boolean>(true);

  const fetchDataTech = () => {
   return tecnologias.response.tecnologias.map(( element:ITecnologia )=> element);
  }

  const fetchDataProyect =()=>{
    return proyectos.data.map( (index:IProyectos) => index);
  }

  const fetchDataServices=()=>{
    return servicios.data.map((index:IServicios)=> index);
  }

  const fetchContactoMessage= async( payload: IMensajes)=>{
    try {

     const resp = await postMessages( payload );
     console.log(resp)
     console.log(resp.msg)
    } catch ( err:any ) {
      error.value = err;
      console.log(error.value?.path)
    }finally{
      isLoading.value = false;
    }
  }

  return {
    fetchContactoMessage,
    fetchDataProyect,
    fetchDataTech,
    fetchDataServices,
    isLoading,
  }
}

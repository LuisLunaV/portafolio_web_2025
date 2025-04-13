import { ref } from 'vue'
import { tecnologias, type ITecnologia } from '@/json/tecnologias';
import { proyectos, type IProyectos} from '@/json/proyectos';
export const useFetch =()=>{

  const isLoading = ref<boolean>(true);

  const fetchDataTech = () => {
   return tecnologias.response.tecnologias.map(( element:ITecnologia )=> element);
  }

  const fetchDataProyect =()=>{
    return proyectos.data.map( (index:IProyectos) => index);
  }

  return {
    fetchDataProyect,
    fetchDataTech,
    isLoading,
  }
}

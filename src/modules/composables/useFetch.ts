import { ref } from 'vue'
import { tecnologias, type ITecnologia } from '@/json/tecnologias';
import { proyectos, type IProyectos} from '@/json/proyectos';
import { servicios, type IServicios} from '@/json/servicios';
export const useFetch =()=>{

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


  return {
    fetchDataProyect,
    fetchDataTech,
    fetchDataServices,
    isLoading
   }
}

import { ref } from 'vue'
import { tecnologias, type ITecnologia } from '@/json/tecnologias';

export const useFetch =()=>{

  const isLoading = ref<boolean>(true);

  const fetchData = () => {
   return tecnologias.response.tecnologias.map(( element:ITecnologia )=> element);
  }


  return {
    fetchData,
    isLoading,
  }
}

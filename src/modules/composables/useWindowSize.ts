import { onMounted, ref } from 'vue';
export const useWindowSize=()=>{
const ventana = ref(window.location.pathname);

const nombreVentana=()=>{
  return ventana.value = window.location.pathname;

}
onMounted(()=>{
window.addEventListener('popstate',()=>{
   nombreVentana();
  });
})

return{
  nombreVentana
}

}

import { ref, onMounted } from 'vue';

enum Dispositivos{
  Grande = 'grande',
  Mediano = 'mediano',
  Pequeno = 'pequeno',
  ExPequeno = 'expequeno'
}
export const useMedia=( )=>{
const ancho = ref(window.innerWidth);
const dispositivo = ref<Dispositivos>(Dispositivos.Grande);

const anchoVentana=()=>{
    ancho.value = window.innerWidth;

      if( ancho.value>1375){
        dispositivo.value = Dispositivos.Grande;
      }
       if( ancho.value>992 && ancho.value<1375){
        dispositivo.value = Dispositivos.Mediano;
      }
      if( ancho.value>576 && ancho.value<992){
        dispositivo.value = Dispositivos.Pequeno;
      }

      if( ancho.value>300 && ancho.value<576 ){
        dispositivo.value = Dispositivos.ExPequeno;
      }

  }

onMounted(()=>{
  window.addEventListener('resize',()=>{
   anchoVentana();
  });
});
  return{
    anchoVentana,
    dispositivo,
  }
}


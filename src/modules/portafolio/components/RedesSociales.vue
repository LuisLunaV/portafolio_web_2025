<template>
  <!-- Nota: Los dos !! se usan para convertir un valor cualquiera en su equivalente booleano (true/false).
  Es una forma rapida y comun de asegurar que un valor sea tratado como boolean.
  -->
      <div v-for="(value, index) in data" :class="[nameActive===false?'redes-div-i':'redes-div-sc',{'ocultar-telefono':anchoVentana>700 && value.telefono }]" :key="index">
      <a
      @click="value.name === 'Mensaje'? $emit('abrirModal'):null"
      :class="[
        (value.name==='Mensaje' && nameActive)
        ?'shadow-drop-center'
        :(value.name==='Mensaje')
        ?'shake-left-right-inicio':null,
        {'centrar':nameActive}]"

      :href="value.url"
      target="_black" >
        <i :class="[ value.clase,'fa-2x', 'color-gris', 'sombra-de-texto-3rem',{'sombra-marca-icon':nameActive===false}]">
        </i>
        <p v-if="nameActive" class="px-2 sombra-de-texto-3rem">{{value.name}}</p>
      </a>
        <span v-if="ventana === '/mis_servicios'" class="tooltip" :style="{ bottom: distancia }">{{ value.name }}</span>
      </div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref, defineEmits } from 'vue';
import { redes, type IRedes } from '@/json/redes';

const data = ref<IRedes[]|null>(null);
const anchoVentana = ref(window.innerWidth);
data.value = redes.data;

interface Props{
  distancia?:string;
  ventana?:string;
  nameActive?:boolean; //Si es la ventana de inicio es false, si es la ventana de servicio y contacto true.
}

withDefaults( defineProps<Props>(),{
  nameActive:false
});

defineEmits(['abrirModal']);
//Al montar
onMounted(()=>{
  window.addEventListener('resize',()=>{
    anchoVentana.value = window.innerWidth;
  });
});

//Antes de desmontar
 onBeforeUnmount(() => {
    window.removeEventListener('resize', ()=>{
    anchoVentana.value = window.innerWidth;
    });
  });

// const sendMessage=(message:string)=>{
//   console.log(message)
// }


</script>

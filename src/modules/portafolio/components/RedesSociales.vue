<template>
  <!-- Nota: Los dos !! se usan para convertir un valor cualquiera en su equivalente booleano (true/false).
  Es una forma rapida y comun de asegurar que un valor sea tratado como boolean.
  -->
      <div v-for="(value, index) in data" :class="activarDivClass(!!value.telefono)" :key="index">
      <a :class="{'centrar':nameActive}" :href="value.url" target="_black">
        <i @click="()=>sendMessage(value.name)" :class="[ value.clase,'fa-2x', 'color-blanco', 'sombra-de-texto-3rem']">
        </i>
        <p v-if="nameActive" class="px-2 sombra-de-texto-3rem">{{value.name}}</p>
      </a>
        <span v-if="ventana === '/mis_servicios'" class="tooltip" :style="{ bottom: distancia }">{{ value.name }}</span>
      </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { redes, type IRedes } from '@/json/redes';


const data = ref<IRedes[]|null>(null);
const anchoVentana = ref(window.innerWidth);
data.value = redes.data;

interface Props{
  distancia?:string;
  ventana?:string;
  nameActive?:boolean;
}

const props = withDefaults( defineProps<Props>(),{
  nameActive:false
});

const activarDivClass =(telefono:boolean ):(string|object)=>{
  return [
    props.nameActive===false?'redes-div-i':'redes-div-sc', //Mostramos o quitamos los nombres de las redes sociales
    {'ocultar-icono':ocultarIconoTelefono( telefono )} //Ocultamos el icono de telefono si no es un dispisitivo celular
  ];
}

const ocultarIconoTelefono=( telefono:boolean):boolean=>{
  return anchoVentana.value>700 && telefono;
}

onMounted(()=>{
  window.addEventListener('resize',()=>{
    anchoVentana.value = window.innerWidth;
    console.log(anchoVentana.value)
  });
})

const sendMessage=(message:string)=>{
  console.log(message)
}


</script>

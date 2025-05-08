<template>
    <div  class="redes-div-i" v-for="(value, index) in data" :key="index">
      <a :href="value.url" target="_black">
        <i @click="()=>sendMessage(value.name)" :class="[ value.clase,'fa-2x', 'color-blanco', 'sombra-de-texto-3rem']">
        </i>
      </a>
        <span v-if="ventana === '/mis_servicios'" class="tooltip" :style="{ bottom: distancia }">{{ value.name }}</span>
      </div>
</template>

<script lang="ts" setup>
import { redes, type IRedes } from '@/json/redes';
import { ref } from 'vue';
const data = ref<IRedes[]|null>(null);
data.value = redes.data;

interface Props{
  distancia:string;
  ventana:string;
}

defineProps<Props>();

const sendMessage=(message:string)=>{
  console.log(message)
}
</script>

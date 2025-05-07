<template>
      <footer class="pie-de-pagina">
     <!-- <div class="pie-mensaje">
      <p class="color-blanco poppins-medium sombra-de-texto-2rem">Contactame</p>
     </div> -->
     <div class="pie-redes">
      <div  class="redes-div-i" v-for="(value, index) in data" :key="index">
        <i @click="()=>sendMessage(value.name)" :class="[ value.clase,'fa-2x', 'color-blanco', 'sombra-de-texto-2rem']">
        </i>
        <span class="tooltip">{{ value.name }}</span>
      </div>
     </div>
    </footer>
</template>

<script lang="ts" setup>
import { redes, type IRedes } from '@/json/redes';
import { ref } from 'vue';
const data = ref<IRedes[]|null>(null);
data.value = redes.data;

const sendMessage=(message:string)=>{
  console.log(message)
}
</script>


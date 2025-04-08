<template>
<div class="vh-100">
<!-- Navegador -->
<NavBar />
<!-- Contenedor pincipal -->
<!-- <main :class="['principal', routeName == '/proyectos'?'negro-mate':'amarillo-mate']" style="height: 100%;"> -->
<main class="principal amarillo-mate" style="height: 100%;">
    <RouterView />
</main>
</div>
</template>

<script lang="ts" setup>
import NavBar from '@/modules/portafolio/components/NavBar.vue';
import { useVentanaStore } from '@/modules/portafolio/stores/ventana.store';
import {  ref, watch } from 'vue';
const ventanaStore = useVentanaStore();
const routeName = ref('');
watch(()=> ventanaStore.nombreVentana, ( newValue )=>{
  routeName.value = newValue;
  console.log(routeName.value)
})
</script>



<template>
<div class="vh-100">
<!-- Navegador -->
<NavBar v-if="
dispositivo == 'grande' ||
dispositivo == 'mediano'
" />
<NavBarResponsive v-else />
<!-- Contenedor pincipal -->
<!-- <main :class="['principal', routeName == '/proyectos'?'negro-mate':'amarillo-mate']" style="height: 100%;"> -->
<main class="principal amarillo-mate" style="height: auto;">
    <RouterView />
</main>
</div>
</template>

<script lang="ts" setup>
import NavBar from '@/modules/portafolio/components/navbar/NavBar.vue';
import NavBarResponsive from '@/modules/portafolio/components/navbar/NavBarResponsive.vue';
import { useMedia } from '@/modules/composables/useMedia';
import { useVentanaStore } from '@/modules/portafolio/stores/ventana.store';
import {  ref, watch } from 'vue';
const ventanaStore = useVentanaStore();
const routeName = ref('');
const { dispositivo, anchoVentana } = useMedia()
anchoVentana()

watch(()=> ventanaStore.nombreVentana, ( newValue )=>{
  routeName.value = newValue;
})
</script>



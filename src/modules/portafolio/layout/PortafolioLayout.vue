<template>
<div class="vh-100">
<!-- Navegador -->
<NavBar />
<!-- Contenedor pincipal -->
<main class="principal amarillo-mate" style="height: 100%;">
    <RouterView />
</main>
</div>
</template>

<script lang="ts" setup>
import NavBar from '@/modules/portafolio/components/NavBar.vue';

</script>



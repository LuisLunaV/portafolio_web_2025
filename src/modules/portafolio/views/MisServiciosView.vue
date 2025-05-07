<template>
      <div class="contenedor-mis-servicios amarillo-mate px-4">
        <ServicioTarjeta :servicios="data"/>
      </div>
      <FooterPortafolio/>
</template>
<script lang="ts" setup>
import FooterPortafolio from '@/modules/portafolio/components/FooterPortafolio.vue';
import ServicioTarjeta from '@/modules/portafolio/components/servicios/ServicioTarjeta.vue';
import { useFetch } from '@/modules/composables/useFetch';

const { fetchDataServices } = useFetch();
const data = fetchDataServices();
</script>

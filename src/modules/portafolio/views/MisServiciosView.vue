<template>
      <div class="contenedor-mis-servicios ">
        <ServicioTarjeta :servicios="data"/>
      </div>
</template>
<script lang="ts" setup>
import ServicioTarjeta from '@/modules/portafolio/components/servicios/ServicioTarjeta.vue';
import { useFetch } from '@/modules/composables/useFetch';

const { fetchDataServices } = useFetch();
const data = fetchDataServices();
</script>

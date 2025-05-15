<template>
      <ServicioTarjeta :servicios="data"/>
      <ContactoPortafolio />
      <FooterPortafolio/>
</template>
<script lang="ts" setup>
import ContactoPortafolio from '@/modules/portafolio/components/servicios/ContactoPortafolio.vue';
import FooterPortafolio from '@/modules/portafolio/components/FooterPortafolio.vue';
import ServicioTarjeta from '@/modules/portafolio/components/servicios/ServicioTarjeta.vue';
import { useFetch } from '@/modules/composables/useFetch';

const { fetchDataServices } = useFetch();
const data = fetchDataServices();


</script>

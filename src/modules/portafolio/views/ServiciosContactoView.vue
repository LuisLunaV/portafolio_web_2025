<template>
      <ModalPortafolio v-if="isOpen"/>
      <!-- <ModalPortafolio v-if="isVisible"  @cerrar="cerrarModal"/> -->

      <ServicioTarjeta :servicios="data"/>
      <ContactoPortafolio />
      <FooterPortafolio/>
</template>
<script lang="ts" setup>
import ContactoPortafolio from '@/modules/portafolio/components/servicios/ContactoPortafolio.vue';
import FooterPortafolio from '@/modules/portafolio/components/FooterPortafolio.vue';
import ServicioTarjeta from '@/modules/portafolio/components/servicios/ServicioTarjeta.vue';

import ModalPortafolio from '@/modules/portafolio/components/ModalPortafolio.vue';
import { useFetch } from '@/modules/composables/useFetch';

import { useModalStores } from '@/modules/portafolio/stores/modal.stores';

import { storeToRefs } from 'pinia';

const modalStore = useModalStores();
const { isOpen } = storeToRefs(modalStore); // Usa storeToRefs aquí


const { fetchDataServices } = useFetch();
const data = fetchDataServices();


</script>

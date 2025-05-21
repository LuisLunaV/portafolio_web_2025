<template>
      <ModalPortafolio v-if="isVisible"  @cerrar="cerrarModal"/>
      <ServicioTarjeta :servicios="data"/>
      <ContactoPortafolio @abrir="mostrarModal" />
      <FooterPortafolio/>
</template>
<script lang="ts" setup>
import ContactoPortafolio from '@/modules/portafolio/components/servicios/ContactoPortafolio.vue';
import FooterPortafolio from '@/modules/portafolio/components/FooterPortafolio.vue';
import ServicioTarjeta from '@/modules/portafolio/components/servicios/ServicioTarjeta.vue';

import ModalPortafolio from '@/modules/portafolio/components/ModalPortafolio.vue';
import { useFetch } from '@/modules/composables/useFetch';
import { useMostrarModal } from '@/modules/composables/useMostrarModal';

const { isVisible, cerrarModal, mostrarModal } = useMostrarModal();

const { fetchDataServices } = useFetch();
const data = fetchDataServices();


</script>

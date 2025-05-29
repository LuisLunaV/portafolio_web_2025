<template>
      <AlertSucces :class="(isAlertSuccess)?'mostrarAlert':'ocultarAlert'" />
      <ModalPortafolio v-if="isOpen"/>
      <ServicioTarjeta :servicios="data"/>
      <ContactoPortafolio />
      <FooterPortafolio/>
</template>
<script lang="ts" setup>
import { watchEffect } from 'vue';
import ContactoPortafolio from '@/modules/portafolio/components/servicios/ContactoPortafolio.vue';
import FooterPortafolio from '@/modules/portafolio/components/FooterPortafolio.vue';
import ServicioTarjeta from '@/modules/portafolio/components/servicios/ServicioTarjeta.vue';
import AlertSucces from '@/modules/portafolio/components/alerts/AlertSucces.vue';
import ModalPortafolio from '@/modules/portafolio/components/ModalPortafolio.vue';
import { useFetch } from '@/modules/composables/useFetch';

import { useModalStores, useAlerts } from '@/modules/portafolio/stores/modal.stores';
import { storeToRefs } from 'pinia';

const modalStore = useModalStores();
const { isOpen } = storeToRefs(modalStore); // Usa storeToRefs aquí
const alertSucces = useAlerts();
const { isAlertSuccess } = storeToRefs(alertSucces);

const { fetchDataServices } = useFetch();
const data = fetchDataServices();

watchEffect(()=>{
  if(isAlertSuccess.value){
    setTimeout(()=>{
      alertSucces.hiddenAlert();
    },3000);

  }
});

</script>


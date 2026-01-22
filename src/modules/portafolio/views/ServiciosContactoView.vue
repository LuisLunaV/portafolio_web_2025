<template>
      <AlertSucces :class="(isAlertSuccess)?'mostrarAlert':'ocultarAlert'" />
        <ErrorEscudos :class="(isErrorEscudos)?'mostrarError':'ocultarError'"/>
      <ModalPortafolio :class="isClosed?'ocultar-modal':'mostrar-modal'"/>
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

import ErrorEscudos from '@/modules/portafolio/components/errors/ErrorEscudos.vue';

import { useModalStores, useAlerts, useErrorEscudos} from '@/modules/portafolio/stores/modal.stores';
import { storeToRefs } from 'pinia';

const { isClosed } = storeToRefs(useModalStores()); // Usa storeToRefs aquí
const alertSucces = useAlerts();
const errorEscudos = useErrorEscudos();

const { isAlertSuccess } = storeToRefs(alertSucces);
const { isErrorEscudos } = storeToRefs(errorEscudos);

const { fetchDataServices } = useFetch();
const data = fetchDataServices();

watchEffect(()=>{
  if(isAlertSuccess.value){
    setTimeout(()=>{
      alertSucces.hiddenAlert();
    },6000);

  }

    if(isErrorEscudos.value){
    setTimeout(()=>{
      errorEscudos.hiddenErrorEsc();
    },8000);
  }
});

</script>


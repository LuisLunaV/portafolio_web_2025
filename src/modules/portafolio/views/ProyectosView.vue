<template>
  <ModalPortafolio v-if="!isClosed" :class="isClosed?'ocultar-modal':'mostrar-modal'" :info="infoProject"/>

<div class="div-project-footer">
  <ProyectoTarjeta :projects="data" @id-seleccionado="idSelect" />
  <FooterPortafolio />
</div>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue'
import { type IProyectos } from '@/json/proyectos';
import { useFetch } from '@/modules/composables/useFetch';
import ProyectoTarjeta from '@/modules/portafolio/components/proyectos/ProyectoTarjeta.vue';
import ModalPortafolio from '@/modules/portafolio/components/ModalPortafolio.vue';
import FooterPortafolio from '@/modules/portafolio/components/FooterPortafolio.vue';
import { useWindowSize } from '@/modules/composables/useWindowSize'

import { useVentanaStore } from '@/modules/portafolio/stores/ventana.store'
import { useModalStores } from '@/modules/portafolio/stores/modal.stores';


const infoProject = ref<IProyectos[]>([]);

const { fetchDataProyect } = useFetch();
const ventanaStore = useVentanaStore();

const { isClosed } = storeToRefs( useModalStores() );
const data = fetchDataProyect();

const idSelect=( id:number)=>{
  infoProject.value = data.filter(index=> index.id === id );
};
onMounted(() => {
  const { nombreVentana } = useWindowSize()
  ventanaStore.setNombreVentana(nombreVentana())
})
</script>


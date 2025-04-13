<template>
<ModalPortafolio v-if="isVisible" @cerrar="cerrarModal"/>
  <div class="contenedor-de-tarjetas amarillo-mate">
    <ProyectoTarjeta :projects="data" @id-seleccionado="idSelect" @abrir="mostrarModal"/>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { useFetch } from '@/modules/composables/useFetch';
import ProyectoTarjeta from '@/modules/portafolio/components/proyectos/ProyectoTarjeta.vue';
import ModalPortafolio from '@/modules/portafolio/components/ModalPortafolio.vue';

import { useWindowSize } from '@/modules/composables/useWindowSize'
import { useMostrarModal } from '@/modules/composables/useMostrarModal';

import { useVentanaStore } from '@/modules/portafolio/stores/ventana.store'

const { fetchDataProyect } = useFetch();
const data = fetchDataProyect();
const ventanaStore = useVentanaStore();
const { isVisible, cerrarModal, mostrarModal} = useMostrarModal();

const idSelect=( id:number)=>{
  const resp = data.filter(index=> index.id === id );
console.log(resp)
};
onMounted(() => {
  const { nombreVentana } = useWindowSize()
  ventanaStore.setNombreVentana(nombreVentana())
})
</script>

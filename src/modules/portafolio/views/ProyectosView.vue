<template>
<ModalPortafolio v-if="isVisible" :info="infoProject" @cerrar="cerrarModal"/>
    <ProyectoTarjeta :projects="data" @id-seleccionado="idSelect" @abrir="mostrarModal"/>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { type IProyectos } from '@/json/proyectos';
import { useFetch } from '@/modules/composables/useFetch';
import ProyectoTarjeta from '@/modules/portafolio/components/proyectos/ProyectoTarjeta.vue';
import ModalPortafolio from '@/modules/portafolio/components/ModalPortafolio.vue';
import { useWindowSize } from '@/modules/composables/useWindowSize'
import { useMostrarModal } from '@/modules/composables/useMostrarModal';

import { useVentanaStore } from '@/modules/portafolio/stores/ventana.store'



const infoProject = ref<IProyectos[]>([]);
const { fetchDataProyect } = useFetch();
const data = fetchDataProyect();
const ventanaStore = useVentanaStore();
const { isVisible, cerrarModal, mostrarModal} = useMostrarModal();

const idSelect=( id:number)=>{
  infoProject.value = data.filter(index=> index.id === id );
};
onMounted(() => {
  const { nombreVentana } = useWindowSize()
  ventanaStore.setNombreVentana(nombreVentana())
})
</script>

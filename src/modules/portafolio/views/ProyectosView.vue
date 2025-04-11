<template>
<ModalPortafolio v-if="isVisible" @cerrar="cerrarModal"/>
  <div class="contenedor-de-tarjetas amarillo-mate">
    <ProyectoTarjeta @abrir="mostrarModal"/>
  </div>
</template>
<script lang="ts" setup>
import ProyectoTarjeta from '@/modules/portafolio/components/proyectos/ProyectoTarjeta.vue';
import ModalPortafolio from '@/modules/portafolio/components/ModalPortafolio.vue';
import { useWindowSize } from '@/modules/composables/useWindowSize'
import { useVentanaStore } from '@/modules/portafolio/stores/ventana.store'
import { onMounted } from 'vue'
import { useMostrarModal } from '@/modules/composables/useMostrarModal';

const ventanaStore = useVentanaStore();

const { isVisible, cerrarModal, mostrarModal} = useMostrarModal();

onMounted(() => {
  const { nombreVentana } = useWindowSize()
  ventanaStore.setNombreVentana(nombreVentana())
})
</script>

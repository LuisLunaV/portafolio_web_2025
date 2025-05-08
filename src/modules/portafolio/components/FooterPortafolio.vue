<template>
      <footer class="pie-de-pagina">
     <!-- <div class="pie-mensaje">
      <p class="color-blanco poppins-medium sombra-de-texto-2rem">Contactame</p>
     </div> -->
     <div class="pie-redes">
      <!-- Redes sociales y de contacto -->
      <RedesSociales :distancia="(ventana === '/mis_servicios')?'80px':''" :ventana="ventana" />
     </div>
    </footer>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useWindowSize } from '@/modules/composables/useWindowSize';
import { useVentanaStore } from '@/modules/portafolio/stores/ventana.store';
import RedesSociales from '@/modules/portafolio/components/RedesSociales.vue';

const ventana = ref<string>('');

onMounted(()=>{
  const { nombreVentana } = useWindowSize();
  const ventanaName = useVentanaStore();
  ventanaName.setNombreVentana(nombreVentana());
  ventana.value = ventanaName.nombreVentana;
});
</script>


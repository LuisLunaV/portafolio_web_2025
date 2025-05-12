<template>
      <footer class="pie-de-pagina">
     <div class="pie-mensaje">
       <p class="poppins-medium">
      © 2025 - Luis Alfredo Luna Villa
      </p>
       <p class="poppins-medium">🛠️ Este portafolio fue desarrollado con las siguientes tecnologias:

         <i class="fab fa-js ps-2 icon-js"></i>
         <i class="fab fa-bootstrap px-2 icon-bts"></i>
         <i class="fab fa-vuejs icon-vuejs"></i>

       </p>

     </div>

    </footer>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useWindowSize } from '@/modules/composables/useWindowSize';
import { useVentanaStore } from '@/modules/portafolio/stores/ventana.store';

const ventana = ref<string>('');

onMounted(()=>{
  const { nombreVentana } = useWindowSize();
  const ventanaName = useVentanaStore();
  ventanaName.setNombreVentana(nombreVentana());
  ventana.value = ventanaName.nombreVentana;
});
</script>


<template>

 <div class="mis-tecnologias amarillo-mate">
      <ul class="contenedor-de-tecnologias">
        <TecnologiaInfo :skills="skills" />
      </ul>
    </div>

</template>
<script lang="ts" setup>
import TecnologiaInfo from '@/modules/portafolio/components/tecnologias/TecnologiaInfo.vue';
import { useFetch } from '@/modules/composables/useFetch';
import { useWindowSize } from '@/modules/composables/useWindowSize';
import { useVentanaStore } from '@/modules/portafolio/stores/ventana.store';
import { onMounted } from 'vue';

const { fetchDataTech } = useFetch();
const skills = fetchDataTech();
const ventanaStore = useVentanaStore();
onMounted(()=>{
  const{ nombreVentana } = useWindowSize();
  ventanaStore.setNombreVentana( nombreVentana() );
});
</script>

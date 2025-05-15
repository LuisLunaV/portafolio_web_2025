<template>
  <div class="mis-tecnologias amarillo-mate">
    <!-- titulo y subtitulo -->
     <TituloSubtitulo
     :title="titulo"
     :subtitle="subtitulo"
     />
    <ul class="contenedor-de-tecnologias">
      <TecnologiaInfo :skills="skills" />
    </ul>
  </div>
</template>
<script lang="ts" setup>
import TecnologiaInfo from '@/modules/portafolio/components/tecnologias/TecnologiaInfo.vue'
import TituloSubtitulo from '../components/TituloSubtitulo.vue'
import { useFetch } from '@/modules/composables/useFetch'
import { useWindowSize } from '@/modules/composables/useWindowSize'
import { useVentanaStore } from '@/modules/portafolio/stores/ventana.store'
import { onMounted, ref } from 'vue'

const titulo = ref<string>('');
const subtitulo = ref<string>('');
titulo.value = 'Conocimientos técnicos y habilidades.';
subtitulo.value = 'Aquí puedes encontrar las tecnologías que he ido desarrollando a lo largo de mi experiencia laboral y mis proyectos personales.';

const { fetchDataTech } = useFetch()
const skills = fetchDataTech()
const ventanaStore = useVentanaStore()
onMounted(() => {
  const { nombreVentana } = useWindowSize()
  ventanaStore.setNombreVentana(nombreVentana())
})
</script>

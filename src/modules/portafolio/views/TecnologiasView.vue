<template>
  <div class="mis-tecnologias amarillo-mate">
    <div class="titulo-subtitulo mb-3">
      <h1 class="color-negro-suave poppins-bold pb-2">Conocimientos técnicos y habilidades.</h1>
      <p class="color-negro-suave poppins-semibold p-2 w-75 text-center">
        Habilidades técnicas que he ido desarrollando a través de mi experiencia laboral y proyectos personales.
      </p>
    </div>
    <ul class="contenedor-de-tecnologias">
      <TecnologiaInfo :skills="skills" />
    </ul>
  </div>
</template>
<script lang="ts" setup>
import TecnologiaInfo from '@/modules/portafolio/components/tecnologias/TecnologiaInfo.vue'
import { useFetch } from '@/modules/composables/useFetch'
import { useWindowSize } from '@/modules/composables/useWindowSize'
import { useVentanaStore } from '@/modules/portafolio/stores/ventana.store'
import { onMounted } from 'vue'

const { fetchDataTech } = useFetch()
const skills = fetchDataTech()
const ventanaStore = useVentanaStore()
onMounted(() => {
  const { nombreVentana } = useWindowSize()
  ventanaStore.setNombreVentana(nombreVentana())
})
</script>

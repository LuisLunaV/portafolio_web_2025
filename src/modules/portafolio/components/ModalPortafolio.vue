<template>
  <div class="fondo-modal">
    <div :class="['dialog-modal']">
      <LoaderPortafolio v-if="isLoading" />
      <ModalProyectos v-if="ventana === '/proyectos'" :info="data ?? []" />
      <!-- si  ventana === '/inicio' || '/servicios_y_contacto' && isLoading === false -->
      <ModalContacto
        v-else-if="(ventana === '/inicio' || ventana === '/servicios_y_contacto') && !isLoading"
        @cerrar-modal="$emit('cerrar')"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import ModalProyectos from '@/modules/portafolio/components/modal/modal_proyectos/ModalProyectos.vue'
import ModalContacto from '@/modules/portafolio/components/modal/modal_contacto/ModalContacto.vue'
import LoaderPortafolio from '@/modules/portafolio/components/loader/LoaderPortafolio.vue'
import { type IProyectos } from '@/json/proyectos'
import { useWindowSize } from '@/modules/composables/useWindowSize'
import { useVentanaStore } from '@/modules/portafolio/stores/ventana.store'

import { useLoadingStore } from '@/modules/portafolio/stores/modal.stores'

const ventana = ref<string>('')

const { isLoading } = storeToRefs(useLoadingStore())

interface Props {
  info?: IProyectos[]
}

const props = defineProps<Props>()
const data = props.info

onMounted(() => {
  const { nombreVentana } = useWindowSize()
  const ventanaName = useVentanaStore()
  ventanaName.setNombreVentana(nombreVentana())
  ventana.value = ventanaName.nombreVentana
})
</script>
<style scoped>
.mostrar-modal {
  visibility: visible;
  opacity: 1;
}
.ocultar-modal {
  visibility: hidden;
  opacity: 0;
}
</style>

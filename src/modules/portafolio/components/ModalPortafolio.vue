<template>
  <div  class="fondo-modal">
    <div class="dialog-modal">
      <LoaderPortafolio v-if="isLoading"/>
      <ModalProyectos v-if="ventana === '/proyectos'" :info="data??[]" @cerrar-modal="$emit('cerrar')" />
       <!-- si  ventana === '/inicio' || '/servicios_y_contacto' && isLoading === false -->
      <ModalContacto
      v-else-if="
      (ventana === '/inicio'
      ||
      ventana === '/servicios_y_contacto')
      &&
      !isLoading"
      @cerrar-modal="$emit('cerrar')"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref , defineEmits} from 'vue';
import { storeToRefs } from 'pinia';
import ModalProyectos from '@/modules/portafolio/components/modal/modal_proyectos/ModalProyectos.vue';
import ModalContacto from    '@/modules/portafolio/components/modal/modal_contacto/ModalContacto.vue';
import LoaderPortafolio from '@/modules/portafolio/components/loader/LoaderPortafolio.vue';
import { type IProyectos } from '@/json/proyectos'
import { useWindowSize } from '@/modules/composables/useWindowSize';

import { useLoadingStore } from '@/modules/portafolio/stores/modal.stores';
import { useVentanaStore } from '@/modules/portafolio/stores/ventana.store';

const ventana = ref<string>('');
const { isLoading } = storeToRefs(useLoadingStore());
console.log(isLoading.value)
interface Props {
  info?: IProyectos[];
}

const props = defineProps<Props>()
const data = props.info;



defineEmits(['cerrar']);

onMounted(()=>{
  const { nombreVentana } = useWindowSize();
  const ventanaName = useVentanaStore();
  ventanaName.setNombreVentana(nombreVentana());
  ventana.value = ventanaName.nombreVentana;
});


</script>

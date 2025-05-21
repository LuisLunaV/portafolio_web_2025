<template>
  <div  class="fondo-modal">
    <div class="dialog-modal">
      <ModalProyectos v-if="ventana === '/proyectos'" :info="data??[]" @cerrar-modal="$emit('cerrar')" />
      <ModalContacto v-else @cerrar-modal="$emit('cerrar')"/>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref , defineEmits} from 'vue';
import { type IProyectos } from '@/json/proyectos'
import ModalProyectos from '@/modules/portafolio/components/modal/modal_proyectos/ModalProyectos.vue';
import ModalContacto from '@/modules/portafolio/components/modal/modal_contacto/ModalContacto.vue';
import { useWindowSize } from '@/modules/composables/useWindowSize';

import { useVentanaStore } from '@/modules/portafolio/stores/ventana.store';

const ventana = ref<string>('');

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
  console.log(ventana.value)
});


</script>

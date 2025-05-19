<template>
  <div  class="fondo-modal">
    <div class="dialog-modal">
      <ModalProyectos :info="data" @cerrar-modal="$emit('cerrar')" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineEmits } from 'vue'
import { type IProyectos } from '@/json/proyectos'
import ModalProyectos from '@/modules/portafolio/components/modal/modal_proyectos/ModalProyectos.vue';


interface Props {
  info: IProyectos[]
}

const props = defineProps<Props>()
const data = props.info;


defineEmits(['cerrar']);




</script>

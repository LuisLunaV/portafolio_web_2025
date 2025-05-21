<template>
  <div v-for="{ id, name, dba, isLegacy ,description, technologies } in info" :key="id" :class="['contenedor-modal rounded-3 box-top', {'w-50':isLegacy}]">

        <!-- modal-header -->
         <ModalHeader :name="name" @close-modal="$emit('cerrarModal')" />
        <!-- -------- -->

        <!-- modal-body -->
         <ModalBody
         :id="id"
         :description="description"
         :technologies="technologies"
         :images-items="imagesItems"
         :get-images="getImages"
         :dba="dba"
         :isLegacy="isLegacy"
         />
        <!-- -------- -->

      </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue'
import { type IProyectos } from '@/json/proyectos'
import ModalHeader from '@/modules/portafolio/components/modal/ModalHeader.vue';
import ModalBody from '@/modules/portafolio/components/modal/modal_proyectos/ModalBody.vue';

const carpeta = ref<IProyectos | null>(null);
const imagesItems = ref<string[]>([])
interface Props {
  info: IProyectos[];
}

const props = defineProps<Props>()

carpeta.value = props.info[0];
// imagesItems.value = props.info[0];
imagesItems.value = props.info[0].img.filter((value, index) => index != 0);

const getImages = (image: string) => {
  const urlImage = new URL(
    `/src/assets/img/proyectos/${carpeta.value?.carpeta}/${image}`,
    import.meta.url,
  ).href
  return urlImage
}

defineEmits(['cerrarModal'])

</script>

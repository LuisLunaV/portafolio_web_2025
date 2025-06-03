<template>
  <div v-for="{ id, name, dba, isLegacy ,description, technologies } in info"
  :key="id"
  :class="['contenedor-modal rounded-3 box-top',
  (dispositivos.includes(dispositivo) && ids550.includes(id))?'padding-top-550'
  :(dispositivos.includes(dispositivo))&& !ids550.includes(id) && !isLegacy?'padding-top-200':null,
  (dispositivos.includes(dispositivo))&&isLegacy?'w-100'
  :isLegacy?'w-50':null]">

        <!-- modal-header -->
         <ModalHeader :name="name" @close-modal="$emit('cerrarModal')" />
        <!-- -------- -->

        <!-- modal-body -->
         <ModalBody
         :id="id"
         :name="name"
         :description="description"
         :technologies="technologies"
         :images-items="imagesItems"
         :get-images="getImages"
         :dba="dba"
         :isLegacy="isLegacy"
         :dispositivo="dispositivo"
         />
        <!-- -------- -->

      </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue'
import { type IProyectos } from '@/json/proyectos'
import ModalHeader from '@/modules/portafolio/components/modal/ModalHeader.vue';
import ModalBody from '@/modules/portafolio/components/modal/modal_proyectos/ModalBody.vue';
import { useMedia } from '@/modules/composables/useMedia';
const { dispositivo, anchoVentana } = useMedia()
anchoVentana();

const carpeta = ref<IProyectos | null>(null);
const imagesItems = ref<string[]>([]);
const dispositivos:string[] = ['pequeno','expequeno'];

interface Props {
  info: IProyectos[];
}

const props = defineProps<Props>()
const ids550:number[] = [1];
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

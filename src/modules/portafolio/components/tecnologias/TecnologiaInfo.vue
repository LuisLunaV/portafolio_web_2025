<template>

  <li v-for="({ information, name, img }, index) in filtrarSkill"
  :key="index"
  class="card card-skills box-bottom"
  style="width: 20rem;"
  >
  <div class="card-skills-img">
    <img :src="getImages(img)" :alt="name"  class="card-img-top" />
  </div>
  <div class="card-body card-skills-bootom">
    <h5 class="card-title poppins-bold">{{name}}</h5>
    <p class="card-text poppins-medium">{{information}}</p>
  </div>
</li>

</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import { type tecnologies } from '@/modules/portafolio/interfaces/tecnologias.interface';

interface Props {
  skills: tecnologies[];
}

const props = defineProps<Props>();

const mostrarImagen = ref(0);

// Computada para filtrar elementos según `mostrarImagen`
const filtrarSkill = computed(() => {
  return props.skills.slice(0, mostrarImagen.value + 1);
});

const getImages = (logo: string) => {
  const url = new URL(`/src/assets/img/logos/${logo}`, import.meta.url).href;
  return url;
};

onMounted(() => {
  const interval = setInterval(() => {
    if (mostrarImagen.value < props.skills.length - 1) {
      mostrarImagen.value++;
    } else {
      clearInterval(interval);
    }
  }, 100);
});
</script>

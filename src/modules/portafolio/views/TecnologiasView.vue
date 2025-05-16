<template>
  <div class="mis-tecnologias amarillo-mate">
    <!-- titulo y subtitulo -->
     <TituloSubtitulo
     :title="titulo"
     :subtitle="subtitulo"
     />
     <FrontEnd :data="technologies[0]" />
     <BackEnd :data="technologies[1]"/>
     <DataBase :data="technologies[2]"/>
     <SistemaOperativo :data="technologies[3]"/>
     <HerramientasDesarrollo :data="technologies[4]"/>
  </div>
</template>
<script lang="ts" setup>
import { useFetch } from '@/modules/composables/useFetch';
import { useWindowSize } from '@/modules/composables/useWindowSize';
import { useVentanaStore } from '@/modules/portafolio/stores/ventana.store';
import { computed, onMounted, ref } from 'vue';
import TituloSubtitulo from '../components/TituloSubtitulo.vue';
import FrontEnd from '../components/tecnologias/FrontEnd.vue';
import BackEnd from '../components/tecnologias/BackEnd.vue';
import DataBase from '../components/tecnologias/DataBase.vue';
import SistemaOperativo from '../components/tecnologias/SistemaOperativo.vue';
import HerramientasDesarrollo from '../components/tecnologias/HerramientasDesarrollo.vue';


const titulo = ref<string>('');
const subtitulo = ref<string>('');
titulo.value = 'Conocimientos técnicos y habilidades.';
subtitulo.value = 'Aquí puedes encontrar las tecnologías que he ido desarrollando a lo largo de mi experiencia laboral y mis proyectos personales.';

const { fetchDataTech } = useFetch();
const ventanaStore = useVentanaStore();
const skills = fetchDataTech();

const technologies = computed(()=>{
  return [
    skills.filter(index => index.categoria === 'front'),
    skills.filter(index => index.categoria === 'back'),
    skills.filter(index => index.categoria === 'db'),
    skills.filter(index => index.categoria === 'sistema_operativo'),
    skills.filter(index => index.categoria === 'control')];
})
onMounted(() => {
  const { nombreVentana } = useWindowSize()
  ventanaStore.setNombreVentana(nombreVentana())
})
</script>

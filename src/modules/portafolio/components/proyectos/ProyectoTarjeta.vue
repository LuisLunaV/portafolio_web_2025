<template>
  <div class="mis-proyectos">
    <TituloSubtitulo
     :title="titulo"
     :subtitle="subtitulo"
     />
  <div class="contenedor-de-tarjetas">
    <div v-for="project in imprimirTarjetas" :key="project.id" class="tarjeta box-top">
      <div class="contenedor-tarjeta centrar-column-flex">
        <div class="imagen-proyecto">
          <img
            :src="getImages( project )"
            alt="imagen-proyecto"
          />
        </div>

        <div class="informacion-proyecto centrar-column-flex">
          <span class="poppins-bold centrar-texto pt-3" style="color:#ffffff"> {{project.name}} </span>
          <div class="py-3">
            <button
            class="btn btn-info-proyect poppins-bold py-2 rounded-3"
            @click="getInfoProject(project.id)"
            >
              Ver información
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts" setup>
import TituloSubtitulo from '@/modules/portafolio/components/TituloSubtitulo.vue';
import { type IProyectos } from '@/json/proyectos';
import { computed, ref } from 'vue';
import { useModalStores } from '@/modules/portafolio/stores/modal.stores';

const { modificarValor } = useModalStores();
const mostrarTarjeta = ref(0);
const titulo = ref<string>('');
const subtitulo = ref<string>('');
titulo.value = 'Mi portafolio.';
subtitulo.value = 'Siéntete libre de explorar mis proyectos y sus respectivas descripciones. Algunos de ellos incluyen acceso directo al repositorio para que puedas revisar el código fuente.';

interface Props{
  projects:IProyectos[];
}

const props = defineProps<Props>();

const imprimirTarjetas = computed(()=>{
  const valor = props.projects.slice(0, mostrarTarjeta.value + 1);
  return valor;
})
// projectArray.value = props.projects;

const emit = defineEmits<{
  idSeleccionado:[id:number]
}>();

const getImages=( info:IProyectos )=>{
const url = new URL(`/src/assets/img/proyectos/${info.carpeta}/${info.img[0]}`, import.meta.url).href;
return url;
}

const getInfoProject=(id:number)=>{
modificarValor();
emit('idSeleccionado', id);
}

const targetInterval = setInterval(()=>{
if( mostrarTarjeta.value < props.projects.length - 1 ){
  mostrarTarjeta.value ++;
}else{
  clearInterval( targetInterval );
}
},350)

</script>

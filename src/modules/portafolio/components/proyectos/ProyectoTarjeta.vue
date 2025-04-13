<template>
    <div v-for="project in projectArray" :key="project.id" class="tarjeta">
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
</template>

<script lang="ts" setup>
import { type IProyectos } from '@/json/proyectos';
import { ref } from 'vue';
const projectArray = ref<IProyectos[]>([]);
interface Props{
  projects:IProyectos[];
}

const props = defineProps<Props>();
projectArray.value = props.projects;

const emit = defineEmits<{
  abrir:[text:string],
  idSeleccionado:[id:number]
}>();

const getImages=( info:IProyectos )=>{
const url = new URL(`/src/assets/img/proyectos/${info.carpeta}/${info.img[0]}`, import.meta.url).href;
return url;
}

const getInfoProject=(id:number)=>{
emit('idSeleccionado', id);
emit('abrir', 'abrir');
}


</script>

<template>
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
</template>

<script lang="ts" setup>
import { type IProyectos } from '@/json/proyectos';
import { computed, ref } from 'vue';
const mostrarTarjeta = ref(0);

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

const targetInterval = setInterval(()=>{
if( mostrarTarjeta.value < props.projects.length - 1 ){
  mostrarTarjeta.value ++;
}else{
  clearInterval( targetInterval );
}
},350)

</script>

<template>
  <div class="mis-servicios">
       <TituloSubtitulo
     :title="titulo"
     :subtitle="subtitulo"
     />
        <div class="contenedor-mis-servicios amarillo-mate px-4">
          <div
          v-for="(value, index) in imprimirServicio"
          :key="index"
        :class="['contenedor-de-servicio tamaño-de-fuente-2 centrar-texto px-2 altura-30 box-bottom', value.clase_box]"
        >
          <div class="titulo-servicio-dos centrar-column-flex">
            <i :class="['fas', value.icon_class ,'fa-2x icono-servicio']"></i>
            <h3
              class="color-blanco poppins-semibold tamaño-de-fuente-3 pt-3"
            >
            {{ value.nombre }}
            </h3>
          </div>
          <div class="informacion-del-servicio-dos centrar-margin px-2 pt-2">
            <p
              class="color-blanco  poppins-medium"
              style="text-align: center;"
            >
            {{ value.description }}
            </p>
          </div>
        </div>
        </div>
        </div>
</template>

<script lang="ts" setup>
import { type IServicios } from '@/json/servicios';
import TituloSubtitulo from '@/modules/portafolio/components/TituloSubtitulo.vue';
import { computed, ref } from 'vue';

const titulo = ref<string>('');
const subtitulo = ref<string>('');
titulo.value = 'Mis servicios.';
subtitulo.value = `Te ofrezco soluciones web completas, desde el diseño de tu sitio hasta la implementación de funcionalidades detrás de escena.
Contáctame y trabajemos juntos para hacer despegar tus ideas.`;

interface Props{
  servicios:IServicios[]
}

const mostrarTarjeta = ref(0);

const props = defineProps<Props>();

const imprimirServicio = computed(()=>{
const valor = props.servicios.slice(0, mostrarTarjeta.value + 1);
return valor;
});

const targetInterval = setInterval(()=>{
if (mostrarTarjeta.value < props.servicios.length -1 ) {
  mostrarTarjeta.value++;
} else {
  clearInterval(targetInterval);
}
},200)
</script>

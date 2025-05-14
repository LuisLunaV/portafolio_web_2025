<template>
          <div
          v-for="(value, index) in imprimirServicio"
          :key="index"
        :class="['contenedor-de-servicio tamaño-de-fuente-2 centrar-texto pading-izq-der altura-30 box-bottom', value.clase_box]"
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
              style="text-align: justify;"
            >
            {{ value.description }}
            </p>
          </div>
        </div>
</template>

<script lang="ts" setup>
import { type IServicios } from '@/json/servicios';
import { computed, ref } from 'vue';
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

<template>
          <div
          v-for="(value, index) in servicios"
          :key="index"
          class="contenedor-de-servicio tamaño-de-fuente-2 centrar-texto pading-izq-der altura-30"
        >
          <div class="titulo-servicio-dos centrar-column-flex">
            <i :class="['fas', value.icon_class ,'fa-2x icono-servicio']"></i>
            <h3
              class="color-blanco poppins-semibold tamaño-de-fuente-3 sombre-de-texto pt-3"
            >
            {{ value.nombre }}
            </h3>
          </div>
          <div class="informacion-del-servicio-dos centrar-margin px-2 pt-2">
            <p
              class="color-blanco poppins-medium sombra-de-texto-2rem"
              style="text-align: justify;"
            >
            {{ value.description }}
            </p>
          </div>
        </div>
</template>

<script lang="ts" setup>
import { type IServicios } from '@/json/servicios';
interface Props{
  servicios:IServicios[]
}

defineProps<Props>();

</script>

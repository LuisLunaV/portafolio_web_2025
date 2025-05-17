<template>
  <div class="div-tech-logo-info">
<div class="tech-logo-info">
<i :class="['bi bi-microsoft', {
              'fs-1': dispositivo == 'grande',
              'fs-2': dispositivo == 'mediano',
              'fs-3': dispositivo == 'pequeno',
              'fs-4': dispositivo == 'expequeno',
            }]"></i>
<p :class="['color-negro-suave poppins-bold',{
              'fs-1': dispositivo == 'grande',
              'fs-2': dispositivo == 'mediano',
              'fs-3': dispositivo == 'pequeno',
              'fs-4': dispositivo == 'expequeno',
            }]">
   Sistemas operativos
</p>
</div>
      <TecnologiaInfo :skills="data" />
</div>
  </template>
<script lang="ts" setup>
import TecnologiaInfo from '@/modules/portafolio/components/tecnologias/TecnologiaInfo.vue'
import { type tecnologies } from '@/modules/portafolio/interfaces/tecnologias.interface';
import { useMedia } from '@/modules/composables/useMedia';
const { dispositivo, anchoVentana } = useMedia();
anchoVentana();
interface Props{
  data:tecnologies[]
}
defineProps<Props>();
</script>

<template>

 <div class="mis-tecnologias amarillo-mate">
      <ul class="contenedor-de-tecnologias">
        <TecnologiaInfo :skills="skills" />
      </ul>
    </div>

</template>
<script lang="ts" setup>
import TecnologiaInfo from '@/modules/portafolio/components/tecnologias/TecnologiaInfo.vue';
import { useFetch } from '@/modules/composables/useFetch';
const { fetchData } = useFetch();
const skills = fetchData();
</script>

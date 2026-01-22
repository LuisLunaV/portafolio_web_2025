<template>
    <footer class="pie-de-pagina"
    :style="{ height: ventana === '/servicios_y_contacto' ? '20vh' : 'auto' }"
    >
      <FooterContacto v-if="ventana === '/servicios_y_contacto'" />
      <FooterProyectos v-if="ventana === '/proyectos'"  />
      <FooterTecnologias v-if="ventana ==='/tecnologias'"/>
    </footer>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useWindowSize } from '@/modules/composables/useWindowSize';
import { useVentanaStore } from '@/modules/portafolio/stores/ventana.store';
import FooterContacto from '@/modules/portafolio/components/footer/FooterContacto.vue';
import FooterProyectos from '@/modules/portafolio/components/footer/FooterProyectos.vue';
import FooterTecnologias from '@/modules/portafolio/components/footer/FooterTecnologias.vue';



const ventana = ref<string>('');

onMounted(()=>{
  const { nombreVentana } = useWindowSize();
  const ventanaName = useVentanaStore();
  ventanaName.setNombreVentana(nombreVentana());
  ventana.value = ventanaName.nombreVentana;
});
</script>


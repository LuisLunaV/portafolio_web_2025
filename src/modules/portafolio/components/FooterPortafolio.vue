<template>
    <footer class="pie-de-pagina">
      <FooterContacto v-if="ventana === '/servicios_y_contacto'" />
      <FooterProyectos v-if="ventana === '/proyectos'" />
    </footer>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useWindowSize } from '@/modules/composables/useWindowSize';
import { useVentanaStore } from '@/modules/portafolio/stores/ventana.store';
import FooterContacto from '@/modules/portafolio/components/footer/FooterContacto.vue';
import FooterProyectos from '@/modules/portafolio/components/footer/FooterProyectos.vue';


const ventana = ref<string>('');

onMounted(()=>{
  const { nombreVentana } = useWindowSize();
  const ventanaName = useVentanaStore();
  ventanaName.setNombreVentana(nombreVentana());
  ventana.value = ventanaName.nombreVentana;
  console.log(ventana.value)
});
</script>


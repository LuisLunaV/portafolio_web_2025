<template>
  <div class="div-modal-contacto box-top">
    <ModalHeader class="modalHeader" :name="(ventana==='/inicio')?titleInicio:title" :icono="isIcono" />
    <ModalBody/>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue';

import ModalHeader from '@/modules/portafolio/components/modal/ModalHeader.vue';
import ModalBody from   '@/modules/portafolio/components/modal/modal_contacto/ModalBody.vue';
import { useWindowSize } from '@/modules/composables/useWindowSize';
import { useVentanaStore } from '@/modules/portafolio/stores/ventana.store';
const ventana = ref<string>('');
const isIcono =ref<boolean>(false);
const title = 'Yo pago el cafe';
const titleInicio = 'Contactándome desde el inicio. Me agradas.';

onMounted(()=>{
  const { nombreVentana } = useWindowSize();
  const ventanaName = useVentanaStore();
  ventanaName.setNombreVentana(nombreVentana());
  ventana.value = ventanaName.nombreVentana;
  console.log(ventana.value)
  isIcono.value = (ventana.value==='/inicio')?false:true;
});
</script>
<style scoped>

.div-modal-contacto{
  border:1px solid var(--amarillo);
  border-radius:10px;
  background-color: var(--negro-suave);
  padding: 10px;
  max-width: 40%;
  width: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
}

.modalHeader{
  width: 100% !important;
}

</style>

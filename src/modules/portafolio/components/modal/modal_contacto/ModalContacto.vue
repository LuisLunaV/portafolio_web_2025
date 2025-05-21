<template>
  <div class="div-modal-contacto box-top">
    <ModalHeader class="modalHeader" :name="title" :icono="true" />
    <ModalBody/>
  </div>
</template>
<script lang="ts" setup>
import ModalHeader from '@/modules/portafolio/components/modal/ModalHeader.vue';
import ModalBody from   '@/modules/portafolio/components/modal/modal_contacto/ModalBody.vue';
import { ref } from 'vue';
const title = ref<string>('');
title.value = 'Yo pago el cafe';

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

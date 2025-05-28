<template>
  <div class="transicion border border-danger bg-danger mb-2 mt-2 rounded-1">
    <p class="fw-medium text-light m-1 ps-1">{{error.msg}}</p>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';

import { type IErrorMsg } from '@/modules/portafolio/interfaces/mensajes.interface';

interface Props{
  error:IErrorMsg,
}

defineProps<Props>();

</script>

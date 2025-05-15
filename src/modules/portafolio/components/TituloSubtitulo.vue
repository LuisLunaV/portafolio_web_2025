<template>
  <div class="titulo-subtitulo mb-3">
      <h1 class="color-negro-suave poppins-bold pb-2">{{title}}</h1>
      <p class="color-negro-suave poppins-semibold p-2 w-75 text-center">
        {{subtitle}}
      </p>
    </div>
</template>
<script lang="ts" setup>
interface Props{
  title:string;
  subtitle:string;
}

defineProps<Props>();
</script>

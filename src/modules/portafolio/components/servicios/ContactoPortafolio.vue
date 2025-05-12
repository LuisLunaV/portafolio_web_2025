<template>
  <div class="div_contacto">
    <div class="contacto-titulos centrar-texto">
        <h2
          class="sombre-de-texto color-blanco poppins-bold pb-5"
        >
          Vamos a trabajar juntos.
        </h2>
        <h3
          class="sombre-de-texto color-blanco poppins-bold pb-5"
        >
          ¿Como tomas tu café?
        </h3>
      </div>
    <div class="div-redes-contacto mt-4">
      <RedesSociales :name-active="true" />
    </div>

  </div>
</template>
<script lang="ts" setup>
import RedesSociales from '@/modules/portafolio/components/RedesSociales.vue';

</script>
<style scoped>
.div_contacto{
height: 80vh;
background-image: var(--fondoNegroMate) !important;
 display: flex;
  flex-direction: column;
  justify-content: center;
}
.contacto-titulos h2{
  font-size: 60px;
  text-shadow: -6px 1px 2px rgba(0, 0, 0, 0.5);
}
.contacto-titulos h3{
  font-size: 40px;
  text-shadow: -6px 1px 2px rgba(0, 0, 0, 0.5);
}
.div-redes-contacto{
  max-height: 50px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}
</style>

<template>
  <div class="pie-mensaje-tech">
  <div class="box div-redes-tech">
      <RedesSociales :nameActive="true" :ventana="'/tecnologias'" />
    </div>
      <div class="pie-mensaje pt-2 pb-3">
       <p class="poppins-medium">
      © 2025 - Luis Alfredo Luna Villa - México
      </p>
      <p class="poppins-medium">🛠️ Este portafolio fue desarrollado con las siguientes tecnologias:

         <i class="fab fa-js ps-2 icon-js"></i>
         <i class="fab fa-bootstrap px-2 icon-bts"></i>
         <i class="fab fa-vuejs icon-vuejs"></i>

       </p>

     </div>
  </div>
</template>

<script lang="ts" setup>
import RedesSociales from '@/modules/portafolio/components/RedesSociales.vue'
</script>

<style scoped>
.pie-mensaje-tech {
  width: 100% !important;
  font-size: 10px !important;
  display:flex;
  flex-direction: column;
}
.div-redes-tech {
  padding-top: 15px;
  width: 100% !important;
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

</style>

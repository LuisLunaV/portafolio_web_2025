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
    <div class="div-redes-contacto">
      <RedesSociales :name-active="true" />
    </div>

  </div>
</template>
<script lang="ts" setup>
import RedesSociales from '@/modules/portafolio/components/RedesSociales.vue';
defineEmits(['abrir']);
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
  height: auto;
 display:grid;
 grid-template-columns: repeat(2, 1fr);
 align-items: center;
 justify-content: center;
}

 @media (min-width: 100px) and (max-width: 375px) {
  .contacto-titulos h2{
  font-size: 40px;
}
.contacto-titulos h3{
  font-size: 30px;
}
  .div_contacto{
    height: 80vh;
  }
.div-redes-contacto{
padding:10px 15px 15px 15px;
gap:10px;

}
}

/* //Resolcion para dispositivos moviles pequeños: */
@media (min-width: 376px) and (max-width: 602px) {
  .contacto-titulos h2{
  font-size: 40px;
}
.contacto-titulos h3{
  font-size: 30px;
}
  .div_contacto{
    height: 80vh;
  }
.div-redes-contacto{
padding:10px 15px 15px 15px;
gap:10px;

}

}

/* //Resolcion para dispositivos moviles medianos: */
@media (min-width: 603px) and (max-width: 859px) {
  .contacto-titulos h2{
  font-size: 60px;
}

.contacto-titulos h3{
  font-size: 40px;
}
  .div_contacto{
    height: 80vh;
  }
.div-redes-contacto{
padding:10px 15px 15px 15px;
gap:10px;
}

}

/* //Resolcion para tablets: */
@media (min-width: 860px) and (max-width: 972px) {

}


@media (min-width: 972px) and (max-width: 1032px) {
.div-redes-contacto{
  padding-top: 24px;

  max-height: 50px;
  height: 100%;
   display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}
}
@media (min-width: 1033px) and (max-width: 1375px) {
.div-redes-contacto{
  padding-top: 24px;

  max-height: 50px;
  height: 100%;
   display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}
}

@media (min-width: 1375px){
 .div-redes-contacto{
  padding-top: 24px;
    max-height: 50px;
  height: 100%;
   display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}
 }

</style>

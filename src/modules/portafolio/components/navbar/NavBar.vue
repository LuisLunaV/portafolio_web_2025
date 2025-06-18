<template>
  <nav :class="['navbar navbar-expand-lg bg-body-tertiary',{'opaciti-0':ocultar }]">
    <div class="container-fluid">
      <!-- <a class="navbar-brand" href="#">{ LuisLV }</a> -->
      <h1 class="nombre-logo poppins-semibold">{ LuisLV }</h1>
          <div :class="['collapse navbar-collapse',{'flexEnd': activado}]" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link poppins-bold" :to="{ name: 'inicio' }" exact-active-class="clase-activa"> Inicio </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link poppins-bold" :to="{ name: 'tecnologias' }" exact-active-class="clase-activa"> Tecnologias </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link poppins-bold" :to="{ name: 'proyectos' }" exact-active-class="clase-activa"> Proyectos </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link poppins-bold" :to="{ name: 'servicios_y_contacto' }" exact-active-class="clase-activa">
              Servicios y contacto
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
const anchoPantalla = ref(window.innerWidth);
const activado = ref<boolean>(false);

const anchoVentana=()=>{
  anchoPantalla.value = window.innerWidth;
    if( anchoPantalla.value>992){
      activado.value = true;
    }else{
      activado.value = false;
    }
}
anchoVentana();

const ocultar = ref<boolean|null>(null);
onMounted(()=>{

  window.addEventListener('resize',()=>{
   anchoVentana();
  });

window.addEventListener('scroll',()=> {
  const y = window.scrollY;

  if (y > 200) {
    //Ocultamos con opacity desde css.
    ocultar.value = true;
  } else {
    ocultar.value = false;
  }
});

});


</script>
<style scoped>
.desactivar-barra{
  display:none;
}
.opaciti-0{
  opacity: 0;
  overflow: hidden;
}
.navbar{
  /* background-color: rgba(0, 0, 0, 0.5) !important; */
  background-color: #1E2A38 !important;

  position: fixed;
  z-index: 3;
  left: 0;
  right: 0;
  top: 0;
  transition: 500ms;
}
.nav-link {
  color:#ffffff;
  cursor: pointer;
}
.clase-activa{
  color:#FF4B5C !important;
  text-shadow: -1.2px 0px 0px #ffffff;

      /* filter: drop-shadow(0 0 5px #fff) */

 }
.nav-link:hover{
  /* color:#f0db4f; */
  /* color:#ffc52d; */
  /* color:#F6DD5E; */
}

.flexEnd{
display: flex;
justify-content: end;
}
</style>

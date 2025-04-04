<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <!-- <a class="navbar-brand" href="#">{ LuisLV }</a> -->
      <h1 class="nombre-logo">{ LuisLV }</h1>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div :class="['collapse navbar-collapse',{flexEnd: activado}]" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link poppins-bold" :to="{ name: 'inicio' }"> Inicio </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link poppins-bold" :to="{ name: 'tecnologias' }"> Tecnologias </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link poppins-bold" :to="{ name: 'proyectos' }"> Proyectos </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link poppins-bold" :to="{ name: 'mis_servicios' }">
              Mis servicios
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link poppins-bold" :to="{ name: 'contacto' }"> Contacto </RouterLink>
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

onMounted(()=>{
  window.addEventListener('resize',()=>{
   anchoVentana();
  });
});


</script>
<style scoped>
.navbar{
  background-color: rgba(0, 0, 0, 0.5) !important;
  position: fixed;
  z-index: 3;
  left: 0;
  right: 0;
  top: 0;
}
.nav-link {
  color:#ffffff;
  cursor: pointer;
}

.flexEnd{
display: flex;
justify-content: end;
}
</style>

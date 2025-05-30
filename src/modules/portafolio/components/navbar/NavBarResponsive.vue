<template>
  <div class="menu-responsive">
    <div @click="toggleMenu" class="hamburger" :class="{ 'is-active': isMenuActive }">
      <div :class="['_layer -top', { 'button-active': isMenuActive }]"></div>
      <div :class="['_layer -mid', { 'button-active': isMenuActive }]"></div>
      <div :class="['_layer -bottom', { 'button-active': isMenuActive }]"></div>
    </div>
    <nav :class="['menuppal', isMenuActive ? 'mostrar-menu' : 'ocultar-menu']">
      <ul>
        <li class="nav-item">
          <RouterLink
            @click="toggleMenu"
            class="nav-link poppins-bold"
            :to="{ name: 'inicio' }"
            exact-active-class="clase-activa"
          >
            <i class="bi bi-house"></i>
            Inicio
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink
            @click="toggleMenu"
            class="nav-link poppins-bold"
            :to="{ name: 'tecnologias' }"
            exact-active-class="clase-activa"
          >
            <i class="bi bi-tools"></i>
            Tecnologias
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink
            @click="toggleMenu"
            class="nav-link poppins-bold"
            :to="{ name: 'proyectos' }"
            exact-active-class="clase-activa"
          >
            <i class="bi bi-window-stack"></i>
            Proyectos
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink
            @click="toggleMenu"
            class="nav-link poppins-bold"
            :to="{ name: 'servicios_y_contacto' }"
            exact-active-class="clase-activa"
          >
            <i class="bi bi-pc-display-horizontal"></i>
            Servicios y contacto
          </RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

import { useScroll } from '@/modules/portafolio/stores/modal.stores'
const scrollActive = useScroll()
const isMenuActive = ref<boolean>(false)
const toggleMenu = () => {
  isMenuActive.value = !isMenuActive.value
  if (isMenuActive.value) {
    scrollActive.activarScroll()
  } else {
    scrollActive.desactivarScroll()
  }
}
</script>
<style scoped>
.nav-item i {
  font-size: 20px;
  margin-right: 20px;
  /* font-weight: 800; */
}
.button-active {
  background: #fff !important;
}
.mostrar-menu {
  opacity: 1;
  transform: translateX(0%);
}
.ocultar-menu {
  opacity: 0;
  transform: translateX(-110%);
}
</style>

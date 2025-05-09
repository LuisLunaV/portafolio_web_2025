<template>
  <div class="menu-responsive">
    <div @click="toggleMenu" class="hamburger" :class="{ 'is-active': isMenuActive }">
      <div class="_layer -top"></div>
      <div class="_layer -mid"></div>
      <div class="_layer -bottom"></div>
    </div>
    <nav class="menuppal">
      <ul>
        <li class="nav-item">
          <RouterLink
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

const isMenuActive = ref<boolean>(false)
const toggleMenu = () => {
  return (isMenuActive.value = !isMenuActive.value)
}
</script>
<style scoped>
.nav-item i {
  font-size: 20px;
  margin-right: 20px;
  /* font-weight: 800; */
}
</style>

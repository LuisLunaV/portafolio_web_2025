<template>
  <button
    @click="scrollTopSmoth()"
    :class="['scroll-top-btn bola link', { ocultar: ocultarButton }]"
  >
    <i class="bi bi-arrow-up"></i>
  </button>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
function scrollTopSmoth() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
const ocultarButton = ref<boolean>(true)
onMounted(() => {
  window.addEventListener('scroll', () => {
    const y = window.scrollY
    if (y > 600) {
      ocultarButton.value = false
    } else {
      ocultarButton.value = true
    }
  })
})
</script>
<style scoped>
i{
  color:var(--naranja);
}
.ocultar {
  opacity: 0;
  visibility: hidden;
}

/* Boton-scroll */

.scroll-top-btn {
  position: fixed;
  z-index: 999;
  bottom: 1vh;
  width: 4rem;
  height: 4rem;
  right: 2vw;
  background-color: var(--negro-suave);
  border-radius: 50%;
  border: 3px solid var(--naranja);
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.5s ease;
  color: var(--naranja);
}

.scroll-top-btn:hover {
  /* background-color: var(--third-color); */
  /* color:#212121; */
  border: 2px solid #f1f1f1;
}

/* Animacion */
.bola {
  animation: subir-bajar 1s infinite;
}

.bola:hover {
  animation: none;
}

@keyframes subir-bajar {
  50% {
    transform: translateY(-20%);
  }
}
@keyframes transparencia {
  50% {
    opacity: 0.2;
  }
}
</style>

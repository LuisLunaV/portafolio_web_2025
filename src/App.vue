<template>
  <AlertOnlyne :class="isOnline ? 'mostrarAlert' : 'ocultarAlert'" />
  <RouterView />
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import AlertOnlyne from './modules/portafolio/components/alerts/AlertOnlyne.vue'
import { isApiOnline } from '@/modules/services/api-get'
const isOnline = ref<boolean>(false)

const checkApiStatus = async () => {
  try {
    isOnline.value = (await isApiOnline()).status

    setTimeout(() => {
      isOnline.value = false
    }, 3000)

  } catch (error: unknown) {
    isOnline.value = false
    console.error('No se pudo conectar con el backend:', error)
  }
}

onMounted(() => {
  setTimeout(async () => {
    checkApiStatus()
  }, 1000)
})
</script>

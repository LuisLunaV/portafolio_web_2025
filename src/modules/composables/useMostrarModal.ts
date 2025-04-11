import { ref } from 'vue'
export const useMostrarModal = () => {
  const isVisible = ref<boolean>(false)

  const mostrarModal = () => {
    isVisible.value = true
  }

  const cerrarModal = () => {
    isVisible.value = false
  }
  return {
    isVisible,
    mostrarModal,
    cerrarModal,
  }
}

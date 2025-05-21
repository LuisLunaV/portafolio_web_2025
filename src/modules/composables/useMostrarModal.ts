import { ref } from 'vue'
export const useMostrarModal = () => {

  const isVisible = ref<boolean>(false);

  const mostrarModal = ():boolean => {
   return isVisible.value = true;
  }

  const cerrarModal = (): boolean => {
    return isVisible.value = false;
  }

  return {
    isVisible,
    mostrarModal,
    cerrarModal,
  }
}

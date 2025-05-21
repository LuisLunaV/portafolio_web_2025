import { ref } from 'vue'
export const useMostrarModal = () => {

  const isVisible = ref<boolean>(false);

  const mostrarModal = ():boolean => {
    document.body.style.overflow = 'hidden';
   return isVisible.value = true;
  }

  const cerrarModal = (): boolean => {
    document.body.style.overflow = 'scroll';
    return isVisible.value = false;
  }

  return {
    isVisible,
    mostrarModal,
    cerrarModal,
  }
}

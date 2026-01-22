import { defineStore } from 'pinia'
import { ref } from 'vue'

// const useModalStores = defineStore('modal', () => {
//   const isOpen = ref<boolean>(false)
//   function actionModal() {
//     isOpen.value = !isOpen.value
//     if (isOpen.value) {
//       document.body.style.overflow = 'hidden'
//     } else {
//       document.body.style.overflow = 'scroll'
//     }
//   }

//   return {
//     isOpen,
//     actionModal,
//   }
// });

const useModalStores = defineStore("Modal",()=>{
  const isClosed = ref<boolean>(true);

  function modificarValor(){
    isClosed.value = !isClosed.value;
  }
  return{
    isClosed,
    modificarValor
  }
});

const useScroll=defineStore('scroll',{
  actions:{
    desactivarScroll(){
      document.body.style.overflow = 'scroll'
    },
    activarScroll(){
      document.body.style.overflow = 'hidden'
    }

  }
})

const useLoadingStore = defineStore('Loading', {
  state: () => ({
    isLoading: false,
  }),
  actions: {
    activeLoader() {
      this.isLoading = true
    },
    stopLoader() {
      this.isLoading = false
    },
  },
});

const useAlerts = defineStore('alerts', {
  state: () => ({
    isAlertSuccess: false,
  }),

  actions: {
    showAlert() {
      this.isAlertSuccess = true
    },
    hiddenAlert() {
      this.isAlertSuccess = false
    },
  },
});

const useErrorEscudos = defineStore('errorEscudos', {
  state: () => ({
    isErrorEscudos: false,
  }),

  actions: {
    showErrorEsc() {
      this.isErrorEscudos = true
    },
    hiddenErrorEsc() {
      this.isErrorEscudos = false
    },
  },
})

export { useModalStores, useLoadingStore, useAlerts, useScroll, useErrorEscudos }

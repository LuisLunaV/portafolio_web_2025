import { defineStore } from 'pinia';
import { ref } from 'vue';

const useModalStores = defineStore('modal',()=>{

  const isOpen = ref<boolean>(false);
function actionModal(){
   isOpen.value = !isOpen.value;
   if( isOpen.value ){
    document.body.style.overflow = 'hidden';
   }else{
    document.body.style.overflow = 'scroll';
   }
};

return{
  isOpen,
  actionModal
}
});

const useLoadingStore = defineStore('Loading',{
state:()=>({
  isLoading:false
}),
actions:{
  activeLoader(){
    this.isLoading = true;
  },
  stopLoader(){
    this.isLoading = false
  }
}
});

const useAlerts = defineStore('alerts',{
  state:()=>({
    isAlertSuccess: false
  }),

  actions:{
    showAlert(){
      this.isAlertSuccess = true;
    },
    hiddenAlert(){
      this.isAlertSuccess = false;
    }
  }
});

export{
  useModalStores,
  useLoadingStore,
  useAlerts
}

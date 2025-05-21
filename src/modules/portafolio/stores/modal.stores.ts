import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useModalStores = defineStore('modal',()=>{
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

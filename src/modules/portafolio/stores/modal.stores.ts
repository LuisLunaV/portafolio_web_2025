import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useModalStores = defineStore('modal',()=>{
const isOpen = ref<boolean>(false);
function actionModal(){
   isOpen.value = !isOpen.value;
};

return{
  isOpen,
  actionModal
}
});

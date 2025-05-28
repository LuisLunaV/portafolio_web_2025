import { defineStore } from 'pinia';
const useErrors= defineStore('errors',{
state:()=>({
  errorActive: false
}),
actions:{
  showError(){
    this.errorActive = true;
  },

  ocultarErro(){
    this.errorActive = false;
  }
}
})

export{
  useErrors
}

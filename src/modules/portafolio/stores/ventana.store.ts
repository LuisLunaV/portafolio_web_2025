import { defineStore } from "pinia";

export const useVentanaStore = defineStore('ventana',{
  state:()=>({
    nombreVentana: '',
  }),
  actions:{
    setNombreVentana( nombre:string ){
      this.nombreVentana = nombre
    }
  }
});

import CelularPc from '@/modules/portafolio/components/pc/CelularPc.vue';
<template>
  <div class="div-contenedor-celular">
    <div class="celular">
      <div class="marco-celular">
        <div class="pantalla-celular">
          <div class="barra-celular">
            <div class="circulo-celular"></div>
            <div class="circulo-celular"></div>
            <div class="circulo-celular"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.div-contenedor-celular {
  position: fixed;
  z-index: 4;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5) !important;
  display: flex;
  justify-content: center;
  padding-top: 10px;
  /* align-items: center; */
}
.celular {
  border-radius: 15px;
  background-color: #ccd4e1;
  height: 85%;
  width: 95%;
  overflow: hidden;

}
.marco-celular {
  background-color: #435d76;
  height: 95%;
  width: 100%;
  padding: 18px;
}
.pantalla-celular {
    overflow: hidden;
  background-color: var(--amarillo);
  height: 100%;
  width: 100%;
  border-radius: 12px;

}
.barra-celular {
  width: 100%;
  height: 8%;
  background-color: #1e2a38;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}
.circulo-celular {
  margin: 0 6px;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: #ccd4e1;
}
</style>

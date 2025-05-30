<template>
  <div class="div-contenedor-celular">
    <div class="celular box-bottom">
      <div class="marco-celular">
        <div class="pantalla-celular">
          <div class="barra-celular">
            <div class="circulo-celular"></div>
            <div class="circulo-celular"></div>
            <div v-on:click="(estaAbierto)?$emit('cerrarVentada'):''" :class="['circulo-celular',{'redActive shadow-drop-center':estaAbierto}]"></div>

            <!-- <div class="circulo-celular"></div> -->
          </div>
          <div class="sobre-mi-msg-celular">
            <!-- <div :class="['sobre-mi-msg',{'openBox':estaAbierto, 'closeBox':!estaAbierto}]"> -->
            <p :class="['p-sobre-mi box-bottom text-center poppins-semibold', 'fs-1']">Sobre mi</p>
            <p class="poppins-medium text-center box-bottom mb-1">
              Desarrollador web con más de dos años de experiencia, actualmente desempeñándome en el
              desarrollo y mantenimiento de aplicaciones web en el sector restaurantero. Me
              considero fan de Asimov y un entusiasta del software libre y evangelista de Linux.
            </p>
            <a class="poppins-semibold btn-pdf pe-2 box-bottom" href="#">
              <i class="bi bi-arrow-down-circle-fill mx-2"></i>
              Descargar CV
            </a>
          </div>
          <!-- <div v-else class="sobre-mi-logo">
            <span class="box-top poppins-bold">{{ logo }}</span>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
interface Props {
  estaAbierto: boolean
}

defineProps<Props>()
defineEmits(['cerrarVentada'])
</script>
<style scoped>
.redActive{
  cursor: pointer;
  background-color: var(--naranja) !important;
}
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
.sobre-mi-msg-celular {
  /* z-index: 2; */
  background-color: var(--amarillo);
  width: 100%;
  height: 84%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.shadow-drop-center {
  animation: shadow-drop-center 1.8s infinite;
}
@keyframes shadow-drop-center {
  0% {
    box-shadow: 0 0 0 0 transparent;
    transform: rotate(0deg);
    transform-origin: 50% 50%;
  }
   10% {
    transform: rotate(4deg);
  }
  20%,
  40%,
  60% {
    transform: rotate(-6deg);
  }
  30%,
  50%,
  70% {
    transform: rotate(6deg);
  }
  80%,
  90%,
  100% {
    filter: drop-shadow(0 0 10px red);
    transform: rotate(0deg);
  }
}

</style>

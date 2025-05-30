<template>
  <div class="contenedor-pc box-right">
    <div class="monitor">
      <div class="marco">
        <div class="pantalla">
          <div class="barra">
            <div class="circulo"></div>
            <div class="circulo"></div>
            <div v-on:click="(estaAbierto)?$emit('cerrarVentada'):''" :class="['circulo',{'redActive':estaAbierto}]"></div>
          </div>

          <div v-if="estaAbierto" class="sobre-mi-msg">
            <!-- <div :class="['sobre-mi-msg',{'openBox':estaAbierto, 'closeBox':!estaAbierto}]"> -->
            <p
              :class="[
                'p-sobre-mi box text-center poppins-semibold',
                {
                  'fs-2': dispositivo == 'grande',
                  'fs-3': dispositivo == 'mediano',
                  'fs-4': dispositivo == 'pequeno' || 'expequeno',
                },
              ]"
            >
              Sobre mi
            </p>
            <p class="poppins-medium text-center box mb-1">
              Desarrollador web con más de dos años de experiencia, actualmente desempeñándome en el desarrollo y mantenimiento de aplicaciones web en el sector restaurantero. Me considero fan de Asimov y un entusiasta del software libre y evangelista de Linux.
            </p>
            <a class="poppins-semibold btn-pdf pe-2 box" href="#">
                <i class="bi bi-arrow-down-circle-fill mx-2"></i>
                Descargar CV
              </a>
          </div>
          <div v-else class="sobre-mi-logo">
            <span class="box-top poppins-bold">{{ logo }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="stand">
      <div class="neck"></div>
      <div class="base"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const logo = ref('</>')

interface Props {
  dispositivo: string
  estaAbierto: boolean
}

defineProps<Props>()
defineEmits(['cerrarVentada']);
</script>
<style scoped>
.redActive{
  cursor: pointer;
  background-color: red !important;
}

.contenedor-pc {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.monitor {
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.8));
  overflow: hidden;
  background-color: #ccd4e1;
  max-width: 500px;
  max-height: 420px;
  width: 100%;
  height: 100%;
  border-radius: 20px;
}

.marco {
  background-color: #435d76;
  height: 82%;
  width: 100%;
  padding: 30px;
}

.pantalla {
  overflow: hidden;
  background-color: var(--amarillo);
  height: 100%;
  width: 100%;
}

.barra {
  width: 100%;
  height: 16%;
  background-color: #1e2a38;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}

.circulo {
  margin: 0 6px;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: #ccd4e1;
}
.stand {
  height: 100px;
  width: auto;
  /* margin-top: px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.neck {
  width: 200px;
  height: 30px;
  background: #435d76;
  margin: 5px 0;
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.8));
}
.base {
  margin-top: 5px;
  width: 300px;
  height: 0px;
  border-top: solid 0px transparent;
  border-right: solid 50px transparent;
  border-bottom: solid 30px #cfd5df;
  border-left: solid 50px transparent;
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.8));
}
</style>

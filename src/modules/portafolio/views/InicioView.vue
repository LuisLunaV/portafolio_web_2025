<template>
  <div class="d-flex flex-row h-100 px-3">
    <div class="cont-inicio ps-5 d-flex flex-column justify-content-center">
      <h1 class="box ps-2">
        <span
          :class="[
            'poppins-extrabold fondo-negro color-blanco px-1',
            {
              'tamano-principal': dispositivo == 'grande',
              'fs-1': dispositivo == 'mediano',
              'fs-2': dispositivo == 'pequeno',
              'fs-3': dispositivo == 'expequeno',
            },
          ]"
        >
          Hola, Soy Luis Luna Villa.
        </span>
      </h1>
      <h2 class="box ps-2 pt-2">
        <span class="poppins-semibold color-negro"> Front-End y Back-End </span>
        <!-- <span class="poppins-semibold color-negro"> Front-End y Back-End </span> -->
      </h2>
      <button
        @click="mostrarSobreMi"
        class="box fs-5 button-contact color-blanco fondo-negro rounded-3 poppins-bold mt-3 py-2"
      >
        Sobre mi
      </button>
    </div>
    <div class="cont-img">
      <img
        class="sombra-img img-fluid box-right"
        src="../../../assets/img/monitor-web-mod-dos.png"
        alt="imagen-inicial"
      />
      <div :class="['sobre-mi-msg',{'openBox':estaAbierto, 'closeBox':!estaAbierto}]">
        <p
          :class="[
            'p-sobre-mi text-center poppins-medium',
            {
              'fs-2': dispositivo == 'grande',
              'fs-3': dispositivo == 'mediano',
              'fs-4': dispositivo == 'pequeno',
              'fs-4': dispositivo == 'expequeno',
            },
          ]"
        >
          Sobre mi
        </p>
        <p class="poppins-medium text-start">
          Desarrollador web con mas de tres años de experiencia, fan de Asimov y evangelista de
          Linux. ¿Quieres saber más? Descarga mi CV.
        </p>
        <div class="div-btn-cv">
          <button
          class="button-animacion btn-cv color-negro amarillo-mate rounded-3 poppins-bold">
            Descarga mi CV
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useMedia } from '@/modules/composables/useMedia'
const { dispositivo, anchoVentana } = useMedia()
const estaAbierto= ref<boolean>( false );
anchoVentana()

const mostrarSobreMi = () => {
  return estaAbierto.value = !estaAbierto.value;
}
</script>

<style scope>
.cont-inicio {
  width: 60%;
}

.button-contact {
  width: 30%;
  text-decoration: none;
  text-align: center;
  transition: all 400ms ease;
  border: solid var(--negro) 3px;
}

.button-contact:hover {
  background-color: #f1f1f1;
  color: var(--negro);
}

.sombra-img {
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.8));
}
.tamano-principal {
  font-size: 50px;
}
.tamano-secundaria {
  font-size: 50px;
}

.color-blanco {
  color: #fff;
}

.sombra-de-texto {
  text-shadow: -6px 1px 2px rgba(0, 0, 0, 0.58);
}
</style>

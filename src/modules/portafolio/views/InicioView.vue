<template>
  <ModalPortafolio v-if="isVisible"  @cerrar="cerrarModal"/>
  <div class="div-inicio amarillo-mate d-flex flex-row vh-100 px-3">
    <div class="cont-inicio ps-5 d-flex flex-column justify-content-center">
      <div class="box">
        <span
          :class="[
            'poppins-extrabold fondo-negro-suave color-blanco px-1',
            {
              'tamano-principal': dispositivo == 'grande',
              'fs-1': dispositivo == 'mediano',
              'fs-2': dispositivo == 'pequeno',
              'fs-3': dispositivo == 'expequeno',
            }
          ]"
        >
          Hola, Soy Luis Luna Villa
        </span>
      </div>
      <div class="box">
        <span :class="['poppins-semibold color-negro',{
              'fs-1': dispositivo == 'grande',
              'fs-2': dispositivo == 'mediano',
              'fs-3': dispositivo == 'pequeno',
              'fs-4': dispositivo == 'expequeno',
            }]"> Desarrollo Web </span>
      </div>
      <div class="box">
        <span :class="['poppins-semibold color-negro',{
              'fs-1': dispositivo == 'grande',
              'fs-2': dispositivo == 'mediano',
              'fs-3': dispositivo == 'pequeno',
              'fs-4': dispositivo == 'expequeno',
            }]"> Front-End y Back-End </span>
      </div>
      <div class="box">
        <button
        @click="mostrarSobreMi"
        class="fs-5 button-contact color-blanco fondo-negro-suave rounded-3 poppins-bold mt-4 py-2"
        >
        Sobre mi
      </button>
    </div>
    <div class="box d-flex flex-row mt-4">
      <!-- Redes sociales y de contacto -->
      <RedesSociales @abrirModal="mostrarModal" :distancia="(ventana === '/inicio')?'60px':''" :ventana="ventana" />
    </div>

    </div>
    <div class="cont-img">
      <ComputadoraPc
      :dispositivo="dispositivo"
      :estaAbierto="estaAbierto"
      />
    </div>
  </div>
  <!-- <div class="inicio-footer"></div> -->
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import ModalPortafolio from '@/modules/portafolio/components/ModalPortafolio.vue';
import RedesSociales from '@/modules/portafolio/components/RedesSociales.vue';
import ComputadoraPc from '@/modules/portafolio/components/pc/ComputadoraPc.vue';
import { useMedia } from '@/modules/composables/useMedia';
import { useWindowSize } from '@/modules/composables/useWindowSize';
import { useVentanaStore } from '@/modules/portafolio/stores/ventana.store';
import { useMostrarModal } from '@/modules/composables/useMostrarModal';
const estaAbierto= ref<boolean>( false );
const ventana = ref<string>('');

const { isVisible, cerrarModal, mostrarModal } = useMostrarModal();

const { dispositivo, anchoVentana } = useMedia()
anchoVentana()

const mostrarSobreMi = () => {
  return estaAbierto.value = !estaAbierto.value;
}

onMounted(()=>{
  const { nombreVentana } = useWindowSize();
  const ventanaName = useVentanaStore();
  ventanaName.setNombreVentana(nombreVentana());
  ventana.value = ventanaName.nombreVentana;
  console.log(dispositivo.value)
});


</script>

<style scope>
.cont-inicio {
  width: 60%;
}

.sombra-img {
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.8));
}
.tamano-principal {
  font-size: 65px;
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

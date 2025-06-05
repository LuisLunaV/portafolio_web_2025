<template>
  <AlertSucces :class="(isAlertSuccess)?'mostrarAlert':'ocultarAlert'" />
  <ModalPortafolio v-if="isOpen"/>
  <CelularPc
  v-if="dispositivo == 'pequeno' && estaAbierto
  || dispositivo == 'expequeno'&& estaAbierto"
  :estaAbierto="estaAbierto"
  @cerrarVentada="mostrarSobreMi"
    />
  <div class="div-inicio d-flex flex-row vh-100 px-3">
    <div class="cont-inicio d-flex flex-column justify-content-center">
      <div class="box div-inicio-nombre">
        <span
          :class="[
            'poppins-extrabold px-1',
            {
              'tamano-principal': dispositivo == 'grande',
              'fs-1': dispositivo == 'mediano',
              'tamano-movil':dispositivo == 'pequeno'
              || dispositivo == 'expequeno'
            }
          ]"
        >
          Hola, Soy Luis Luna Villa
        </span>
      </div>
      <div class="box div-inicio-subtitulo">
        <span :class="['poppins-semibold',{
              'fs-1': dispositivo == 'grande'
              || dispositivo == 'pequeno',
              'fs-2': dispositivo == 'mediano',
              'fs-4': dispositivo == 'expequeno',
            }]"> Desarrollo Web </span>
      </div>
      <div class="box div-inicio-subtitulo">
        <span :class="['poppins-semibold',{
              'fs-1': dispositivo == 'grande'
               || dispositivo == 'pequeno',
              'fs-2': dispositivo == 'mediano',
              'fs-4': dispositivo == 'expequeno',
            }]"> Front-End y Back-End </span>
      </div>
      <div class="box">
        <button
        @click="mostrarSobreMi"
        class="fs-5 button-contact rounded-3 poppins-bold mt-4 py-2"
        >
        Sobre mi
      </button>
    </div>
    <div class="box div-redes mt-4">
      <!-- Redes sociales y de contacto -->
      <RedesSociales :distancia="(ventana === '/inicio')?'60px':''" :ventana="ventana" />
    </div>

    </div>
    <div class="cont-img">
       <ComputadoraPc
       v-if="dispositivo == 'grande'"
      @cerrarVentada="mostrarSobreMi"
      :dispositivo="dispositivo"
      :estaAbierto="estaAbierto"
      />
      <LaptopPc
      v-if="dispositivo == 'mediano'"
      @cerrarVentada="mostrarSobreMi"
      :dispositivo="dispositivo"
      :estaAbierto="estaAbierto"
      />

    </div>
  </div>
  <!-- <div class="inicio-footer"></div> -->
</template>

<script lang="ts" setup>
import { onMounted, ref, watchEffect } from 'vue';
import ModalPortafolio from '@/modules/portafolio/components/ModalPortafolio.vue';
import RedesSociales from '@/modules/portafolio/components/RedesSociales.vue';
import ComputadoraPc from '@/modules/portafolio/components/pc/ComputadoraPc.vue';
import LaptopPc from '@/modules/portafolio/components/pc/LaptopPc.vue';
import CelularPc from '@/modules/portafolio/components/pc/CelularPc.vue';

import { useMedia } from '@/modules/composables/useMedia';
import { useWindowSize } from '@/modules/composables/useWindowSize';
import { useVentanaStore } from '@/modules/portafolio/stores/ventana.store';
import { useModalStores, useAlerts} from '@/modules/portafolio/stores/modal.stores';

import AlertSucces from '@/modules/portafolio/components/alerts/AlertSucces.vue';
import { storeToRefs } from 'pinia';

const estaAbierto= ref<boolean>( false );
const ventana = ref<string>('');


const { dispositivo, anchoVentana } = useMedia()
anchoVentana()

const mostrarSobreMi = () => {
  return estaAbierto.value = !estaAbierto.value;
}

const { isOpen } = storeToRefs( useModalStores() );

const alertSucces = useAlerts();
const { isAlertSuccess } = storeToRefs(alertSucces);
watchEffect(()=>{
  if(isAlertSuccess.value){
    setTimeout(()=>{
      alertSucces.hiddenAlert();
    },3000);

  }
});
onMounted(()=>{
  const { nombreVentana } = useWindowSize();
  const ventanaName = useVentanaStore();
  ventanaName.setNombreVentana(nombreVentana());
  ventana.value = ventanaName.nombreVentana;
});


</script>

<style scope>


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

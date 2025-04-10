<template>
<ModalPortafolio v-if="isVisible" @close="cerrarModal"/>
  <div class="contenedor-de-tarjetas amarillo-mate">

    <div class="tarjeta">
      <div class="contenedor-tarjeta centrar-column-flex">
        <div class="imagen-proyecto">
          <img
            src="https://res.cloudinary.com/luisluna1991/image/upload/v1642313432/m6w7kqyjeykgnace1rok.jpg"
            alt="imagen-proyecto"
          />
        </div>

        <div class="informacion-proyecto centrar-column-flex">
          <span class="poppins-bold centrar-texto pt-3" style="color:#ffffff"> Pokedex </span>
          <div class="py-3">
            <button
            class="btn btn-info-proyect poppins-bold py-2 rounded-3"
            @click="mostrarModal"
            >
              Ver información
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script lang="ts" setup>
import ModalPortafolio from '@/modules/portafolio/components/ModalPortafolio.vue';
import { useWindowSize } from '@/modules/composables/useWindowSize'
import { useVentanaStore } from '@/modules/portafolio/stores/ventana.store'
import { onMounted } from 'vue'
import { ref } from 'vue';
const ventanaStore = useVentanaStore();
const isVisible = ref<boolean>(false);

const mostrarModal=()=>{
  isVisible.value = true;
}

const cerrarModal=()=>{
  isVisible.value = false;
}
onMounted(() => {
  const { nombreVentana } = useWindowSize()
  ventanaStore.setNombreVentana(nombreVentana())
})
</script>

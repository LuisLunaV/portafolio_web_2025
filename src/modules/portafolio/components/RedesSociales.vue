<template>
  <!-- Nota: Los dos !! se usan para convertir un valor cualquiera en su equivalente booleano (true/false).
  Es una forma rapida y comun de asegurar que un valor sea tratado como boolean.
  -->

  <div
    v-for="(value, index) in data"
    :key="index"
    :class="[
      ventana === '/tecnologias'
        ? 'redes-div-tech'
        : nameActive === false && ventana != '/tecnologias'
          ? 'redes-div-i'
          : 'redes-div-sc',
      { 'ocultar-icono': anchoVentana > 700 && value.telefono },
      { 'ocultar-icono': value.name === 'Mensaje' && ventana === '/tecnologias' },
    ]"
  >
    <a
      @click="activarModalMensaje(value.name)"
      :class="[iconoMensaje(value.name), { centrar: nameActive }]"
      :href="value.url"
      target="_black"
      style="text-decoration: none"
    >
      <i
        :class="[
          value.clase,
          'color-gris',
          'sombra-de-texto-3rem',
          { 'sombra-marca-icon': nameActive === false },
        ]"
      >
      </i>
      <p v-if="nameActive && ventana != '/tecnologias'" class="px-2 sombra-de-texto-3rem">
        {{ value.name }}
      </p>
      <span v-else-if="nameActive" class="p-tech" style="color: #f1f1f1">{{ value.name }}</span>
    </a>

    <span v-if="esMiServicios" class="tooltip" :style="{ bottom: distancia }">{{
      value.name
    }}</span>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { redes, type IRedes } from '@/json/redes'
import { useModalStores } from '@/modules/portafolio/stores/modal.stores'
const data = ref<IRedes[] | null>(null)
const anchoVentana = ref(window.innerWidth)
data.value = redes.data

interface Props {
  distancia?: string
  ventana?: string
  nameActive?: boolean //Si es la ventana de inicio es false, si es la ventana de servicio y contacto true.
}

const props = withDefaults(defineProps<Props>(), {
  nameActive: false,
})

const esMiServicios = props.ventana === '/mis_servicios'
const { modificarValor } = useModalStores()

function iconoMensaje(value: string): string | null {
  return value === 'Mensaje' && props.nameActive
    ? 'shadow-drop-center'
    : value === 'Mensaje'
      ? 'shake-left-right-inicio'
      : null
}

function activarModalMensaje(ventana: string) {
  return ventana === 'Mensaje' ? modificarValor() : null
}
//Al montar
onMounted(() => {
  window.addEventListener('resize', () => {
    anchoVentana.value = window.innerWidth
  })
})

//Antes de desmontar
onBeforeUnmount(() => {
  window.removeEventListener('resize', () => {
    anchoVentana.value = window.innerWidth
  })
})
</script>
<style scoped>
.p-tech {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px !important;
  padding: 0 10px 0 10px !important;
}
i {
  font-size: 3em;
}

@media (min-width: 780px) {
  .p-tech {
    font-size: 15px !important;
  }
  i {
    font-size: 2em;
  }
}
</style>

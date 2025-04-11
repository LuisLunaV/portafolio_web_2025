<template>
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
            @click="$emit('abrir')"
            >
              Ver información
            </button>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts" setup>

defineEmits(['abrir']);

</script>

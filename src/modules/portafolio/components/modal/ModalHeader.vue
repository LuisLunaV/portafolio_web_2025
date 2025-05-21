<template>
  <div class="modal-header px-3 py-2">
          <h3 class="modal-title color-blanco pt-2 poppins-medium">{{ name }} <i v-if="icono" class="bi bi-cup-hot-fill px-2"></i></h3>
          <!-- Aqui va el slot -->
          <svg
            @click="actionModal"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-x-lg btn-cerrar"
            viewBox="0 0 16 16"
          >
            <path
              d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"
            />
          </svg>
          <!-- <button type="button" class="btn-close color-blanco" data-bs-dismiss="modal" aria-label="Close"></button> -->
        </div>
        </template>

      <script lang="ts" setup>
      import { useModalStores } from '@/modules/portafolio/stores/modal.stores';


      interface Props{
        name:string;
        icono?:boolean;
      }
      defineProps<Props>();

      const { actionModal } = useModalStores();



      </script>

<template>
  <div class="modal-body">

          <div :class="['modal-body-information p-4', id === 3 ? 'w-50' : 'w-50', {'w-100': isLegacy}]">

            <div :class="{'modal-body-information-p': id === 3 || id === 4}">
              <p class="poppins-regular" style="text-align: justify; color: #fff" v-html="description"></p>
            </div>

            <div class="modal-body-technology pt-3">
              <i
                v-for="({ clase, color }, index) in technologies"
                :key="index"
                :class="[color, 'fab', clase, 'fa-3x']"
              ></i>
              <i v-if="dba" class="color-blanco fas fa-database fa-3x"></i>
            </div>
          </div>

          <div v-if="!isLegacy" :class="['modal-body-images', id === 3 ? 'w-50' : 'w-50']">
            <div id="carouselExampleFade" class="carousel slide carousel-scale">
              <div class="carousel-inner py-3">
                <div
                  v-for="(item, index) in imagesItems"
                  :key="index"
                  :class="['carousel-item', { active: index === 0 }]"
                >
                  <img
                    :src="getImages(item)"
                    :class="['d-block w-100',
                    {
                      'altura-drive':  id === 1,
                      'altura-turnos': id === 2,
                      'altura-nips':   id === 3
                    }]"
                    alt="{{name}}"
                  />
                </div>
              </div>

              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
              >
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
              >
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>

        </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { type Icons } from '@/json/proyectos';
interface Props{
  id:number;
  dba:boolean;
  isLegacy:boolean;
  description:string;
  technologies:Icons[];
  imagesItems:string[];
  getImages: (img:string)=>string;
}

defineProps<Props>();


</script>

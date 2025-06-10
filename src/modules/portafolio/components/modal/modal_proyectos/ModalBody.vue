<template>
  <div class="modal-body" :id="idProyecto">
    <div
      :class="[
        'modal-body-information p-4',
        dispositivos.includes(dispositivo) ? 'w-50' : 'w-100',
        { 'w-100': isLegacy },
      ]"
    >
      <div
        :class="[
          { 'modal-body-information-p': id === 3 || id === 4 },
          { 'modal-body-information-p': !dispositivos.includes(dispositivo) },
        ]"
      >
        <p
          class="poppins-regular"
          style="text-align: justify; color: #fff"
          v-html="description"
        ></p>
      </div>

      <div class="modal-body-technology pt-3">
        <template v-for="({ name, clase, color, url }, index) in technologies" :key="index">
          <a v-if="url" :href=" url " target="_blank">
          <i :class="['faq-button',color, 'fab', clase, 'fa-3x']">
            <TooltipName :name="name"/>
          </i>
          </a>
          <i v-else :class="['faq-button',color, 'fab', clase, 'fa-3x']">
            <TooltipName :name="name"/>
          </i>
        </template>
        <i v-if="dba" class="faq-button color-blanco fas fa-database fa-3x">
            <TooltipName name="MySQL"/>
        </i>
      </div>
    </div>

    <div
      v-if="!isLegacy"
      :class="['modal-body-images', dispositivos.includes(dispositivo) ? 'w-50' : 'w-100']"
    >
      <div id="carouselExampleFade" class="carousel slide carousel-scale">
        <div class="carousel-inner py-3">
          <div
            v-for="(item, index) in imagesItems"
            :key="index"
            :class="['carousel-item', { active: index === 0 }]"
          >
            <img
              :src="getImages(item)"
              :class="[
                'd-block w-100',
                {
                  'altura-drive': id === 1,
                  'altura-turnos': id === 2,
                  'altura-nips': id === 3,
                },
              ]"
              :alt="name"
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
import { defineProps } from 'vue'
import { type Icons } from '@/json/proyectos'
import TooltipName from '@/modules/portafolio/components/alerts/TooltipName.vue';
interface Props {
  id: number
  name: string
  dba: boolean
  isLegacy: boolean
  description: string
  technologies: Icons[]
  imagesItems: string[]
  dispositivo: string
  getImages: (img: string) => string
}
const props = defineProps<Props>()

const dispositivos: string[] = ['grande', 'mediano']
const idProyecto: string = JSON.stringify(props.id)
</script>

<style scoped>
a{
  text-decoration: none;
}
i{
  display: flex;
  justify-content: center;
}
</style>

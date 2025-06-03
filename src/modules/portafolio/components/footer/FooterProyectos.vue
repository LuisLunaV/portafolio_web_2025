<template>
  <div class="div-footer-marcas">
  <p class="text-center poppins-medium">
    🛠️ Marcas que aplican mi trabajo en sus procesos 🛠️
  </p>
  <div class="tag-list">
    <div class="inner">
      <div v-for="({ id, img}) in urlCompanies" :key="id" class="tag">
        <img :src="urlImages( img )" alt="">
      </div>
    </div>
    <div class="fade"></div>
</div>
</div>
</template>
<script lang="ts" setup>
import { companies } from '@/json/companies';
import { computed } from 'vue';

const urlCompanies = computed(()=>{
return companies.data.map( index=>{
  return index;
});
});

const urlImages =( data:string)=>{
  const url = new URL(`/src/assets/img/empresas/${data}`, import.meta.url).href;
  return url;
}
</script>

<style scoped>
.div-footer-marcas{
  padding: 20px 0 30px 0;
}
.tag-list{
  width: auto;
  background-color: rgba(255,255,255,0.8);
  padding: 15px;
  position:relative;
  overflow: hidden;
}
.inner{
  width: 100%;
  /* width: fit-content; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  animation: loop 15s linear infinite;
}
.tag{
display:flex;
align-items: center;
padding:0 10px
}
.tag img{
    max-height: 50px ;
  width: auto;
  height: auto;
  display: block;
  object-fit: cover;
}
.fade{
  opacity: 1;
  position:absolute;
  background: linear-gradient(90deg,
  rgba(255,255,255,0.5), transparent 50%,
  transparent 70%, rgba(255,255,255,1)
  );
  inset:0;
  pointer-events: none;
}
@keyframes loop{
  0%{
    transform: translateX(100%);
  }
  100%{
    transform: translateX(-100%);
  }

}

/* Celular */


@media (min-width: 100px) and (max-width: 375px) {
.div-footer-marcas p{
  font-size: 12px;
}
}

/* //Resolcion para dispositivos moviles pequeños: */
@media (min-width: 376px) and (max-width: 602px) {
.div-footer-marcas p{
  font-size: 12px;
}
}

/* //Resolcion para dispositivos moviles medianos: */
@media (min-width: 603px) and (max-width: 859px) {
.div-footer-marcas p{
  font-size: 12px;
}
}

/* //Resolcion para tablets: */
@media (min-width: 860px) and (max-width: 972px) {
  /* Globales */

}
/* Resolcion para pc de Laptops: */

@media (min-width: 972px) and (max-width: 1032px) {
.inner{
  flex-wrap: wrap;
}
.tag-list{
  border-radius: 10px;
}
}

/* Resolcion para pc de escritorio: */
@media (min-width: 1033px) and (max-width: 1375px) {
.inner{
  flex-wrap: wrap;
}
.tag-list{
  border-radius: 10px;
}
}

@media (min-width: 1375px) {
.inner{
  flex-wrap: wrap;
}
.tag-list{
  border-radius: 10px;
}
}
</style>

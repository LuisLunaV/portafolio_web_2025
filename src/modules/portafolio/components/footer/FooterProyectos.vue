<template>
  <!-- <p>Companias</p> -->
  <div class="tag-list">
    <div class="inner">
      <div v-for="({ id, img}) in urlCompanies" :key="id" class="tag">
        <img :src="urlImages( img )" alt="">
      </div>
    </div>
    <div class="fade"></div>
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
.tag-list{
  width: 60%;
  border-radius: 10px;
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
  flex-wrap: wrap;
  animation: loop 20s linear infinite;
}
.tag{
display:flex;
align-items: center;
/* gap: 0 0.2rem; */
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
  rgba(255,255,255,0.8), transparent 50%,
  transparent 70%, rgba(255,255,255,0.8));
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
</style>

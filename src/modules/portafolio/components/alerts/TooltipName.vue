<template>
    <span class="tooltip">{{ name }}</span>
</template>
<script lang="ts" setup>
interface Props{
  name:string;
}

defineProps<Props>();
</script>
<style scoped>
.tooltip {
  position: absolute;
  bottom: 80px;
  opacity: 0;
  background-color: #f1f1f1;
  /* background-image: linear-gradient(147deg, #ffe53b 0%, #ff2525 74%); */
  color: var(--negro);
  padding: 5px 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 0.2s;
  pointer-events: none;
  letter-spacing: 0.5px;
}

.tooltip::before {
  position: absolute;
  content: "";
  width: 10px;
  height: 10px;
  background-color: #f1f1f1;
  background-size: 1000%;
  background-position: center;
  transform: rotate(45deg);
  bottom: -15%;
  transition-duration: 0.3s;
}

.faq-button:hover .tooltip {
  /* top: 1px; */
  opacity: 1;
  transition-duration: 0.3s;
}

</style>

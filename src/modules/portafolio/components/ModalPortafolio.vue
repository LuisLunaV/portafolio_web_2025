<template>
<div class="fondo-modal">
  <div class="dialog-modal">
    <div class="contenedor-modal rounded-3 box-top">
      <div class="modal-header px-3 py-2">
        <h3 class="modal-title color-blanco">Modal title</h3>
        <!-- Aqui va el slot -->
        <svg @click="closeModal" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-x-lg btn-cerrar" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
        </svg>
        <!-- <button type="button" class="btn-close color-blanco" data-bs-dismiss="modal" aria-label="Close"></button> -->
      </div>
      <div class="modal-body">
        <div class="modal-body-information w-50 px-3">
          <p style="text-align: justify; color:#fff">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ullam fuga obcaecati non commodi quia minus nam eos, cum dolorem amet eligendi repellat, suscipit atque molestias cumque placeat laborum? Quas ullam vitae delectus ducimus sunt cum. Natus perferendis consequatur cumque dolore fuga consequuntur quia quasi vitae asperiores omnis dolor in sequi voluptas adipisci eaque corrupti quas minima eius cupiditate vero commodi, iure eum debitis modi? Provident sed laborum a, quidem ab dignissimos ex suscipit soluta! Earum voluptas aliquid mollitia saepe voluptatem ratione. Vitae ratione minima nulla voluptatum sit fuga eos! Temporibus perspiciatis odio voluptate? Esse, dolorum autem. Soluta dolorem voluptatibus recusandae expedita cupiditate quisquam nemo. Assumenda, odio cum dolorem iusto deserunt, ut nihil repudiandae voluptate vero asperiores quae eum eligendi?</p>

          <div class="modal-body-technology">
            <i class="color-blanco fab fa-html5 fa-3x"></i>
            <i class="color-blanco fab fa-css3-alt fa-3x"></i>
            <i class="color-blanco fab fa-js fa-3x"></i>
            <i class="color-blanco fab fa-github fa-3x"></i>
            <i class="color-blanco fab fa-vuejs fa-3x"></i>
            <i class="color-blanco fab fa-node-js fa-3x"></i>
            <i class="color-blanco fab fa-laravel fa-3x"></i>
            <i class="color-blanco fab fa-php fa-3x"></i>
            <i class="color-blanco fab fa-bootstrap fa-3x"></i>
            <i class="color-blanco fas fa-database fa-3x"></i>

          </div>
        </div>

      <div class="modal-body-images w-50">
        <div id="carouselExampleFade" class="carousel slide carousel-scale">
  <div class="carousel-inner py-3">
    <div class="carousel-item active">
      <img src="../../../assets/img/logos/bootstrap.svg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../../../assets/img/logos/css.svg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../../../assets/img/logos/express.svg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
      </div>
      <!-- <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> -->
    </div>
  </div>
</div>
</template>
<script lang="ts" setup>
import { defineEmits } from 'vue';

// Emitimos la orden cerrar para que ejecuten la funcion cerrarModal
const emit = defineEmits(['cerrar'])

const closeModal =()=>{
emit('cerrar');
}




</script>

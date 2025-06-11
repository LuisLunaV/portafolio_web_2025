<template>
    <div class="w-100 d-flex justify-content-center align-item-center"  id="container-alert">
        <div class="alert alert-success notification-failure d-flex justify-content-center align-items-center w-75 h-50" role="alert">
        <div class="poppins-semibold">
            <i class="fas fa-envelope me-2"></i>
            <span>Mensaje enviado correctamente. Yo me comunicare contigo!</span>
        </div>
    </div>
</div>
</template>

<style scoped>
.mostrarAlert{
  opacity: 1;
  z-index: 3 !important;
  position:fixed !important;
  transform: translateY(0%) !important;
  transition: 1s;
}
.ocultarAlert{
  opacity: 0;
  z-index: 3 !important;
  position:fixed !important;
  transform: translateY(-100%) !important;
  transition: 1s;
}
</style>

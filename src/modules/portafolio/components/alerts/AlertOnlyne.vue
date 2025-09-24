<template>
    <div class="mostrarAlert w-100 d-flex justify-content-center align-item-center"  id="container-alert">
        <div class="alert alert-success notification-failure d-flex justify-content-center align-items-center w-45 h-50" role="alert">
        <div class="poppins-semibold">
            <i class="bi bi-check-circle-fill me-2"></i>
            <span>Online!</span>
        </div>
    </div>
</div>
</template>

<style scoped>
.mostrarAlert{
  padding-top: 5px;
  opacity: 1;
  z-index: 4 !important;
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

<template>
    <div class="w-100 d-flex justify-content-center align-item-center"  id="container-errorEscudos">
        <div class="alert alert-warning notification-failure d-flex justify-content-center align-items-center w-75 h-50" role="alert">
          <div class="poppins-semibold">
            <i class="bi bi-exclamation-circle-fill"></i>
            <span>
             Los escudos de Brave o Firefox pueden bloquear el envío de tu mensaje. Prueba desactivarlos un momento.
            </span>
        </div>
    </div>
</div>
</template>

<style scoped>
.mostrarError{
  opacity: 1;
  z-index: 3 !important;
  position:fixed !important;
  transform: translateY(0%) !important;
  transition: 1s;
}
.ocultarError{
  opacity: 0;
  z-index: 3 !important;
  position:fixed !important;
  transform: translateY(-100%) !important;
  transition: 1s;
}
</style>

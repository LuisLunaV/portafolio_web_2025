<template>
  <div class="d-flex flex-row h-100 px-3">
    <div class="rojo w-50 ps-5 d-flex flex-column justify-content-center">
      <h1 class="box">
        <span class="poppins-extrabold color-blanco sombra-de-texto tamano-secundaria">
          Desarrollador web
        </span>
      </h1>
      <br />
      <h1>
        <span class="poppins-extrabold color-blanco sombra-de-texto tamano-principal">
          Hola, soy Luis Alfredo Luna
        </span>
      </h1>
    </div>
    <div class="azul w-50 d-flex justify-content-center">
      <img class="sombra-img" src="../../../assets/img/monitor-web-mod-dos.png" alt="" />
    </div>
  </div>
</template>

<style scope>
.rojo {
  /* border: solid red 3px; */
  height: auto;
}
.azul {
  /* border: solid blue 3px; */
  height: auto;
}
.sombra-img {
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.8));
}
.box {
  animation: slideIn 1s ease-out forwards; /* Aplicar la animación */
}

/* Definición de la animación */
@keyframes slideIn {
  0% {
    transform: translateX(-5%); /* Comienza con una escala negativa */
    opacity: 0; /* Opcional: Puedes agregar efectos adicionales como opacidad */
  }
  100% {
    transform: translateX(0%); /* Vuelve a la escala normal */
    opacity: 1; /* Opcional: Hacer visible completamente */
  }
}
.tamano-principal {
  font-size: 60px;
}
.tamano-secundaria {
  font-size: 60px;
}

.color-blanco {
  color: #fff;
}

.sombra-de-texto {
  text-shadow: -6px 1px 2px rgba(0, 0, 0, 0.58);
}
</style>

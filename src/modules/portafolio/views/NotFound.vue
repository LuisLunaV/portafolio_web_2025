<template>
  <div class="not-found-container">
    <!-- Elementos decorativos circulares -->
    <div class="decoration-circle circle-1"></div>
    <div class="decoration-circle circle-2"></div>
    <div class="decoration-circle circle-3"></div>
    <div class="not-found-content">
      <div class="text-informatio">
        <h1 class="error-code">404</h1>
        <h2 class="error-title">Página no encontrada</h2>
        <p class="error-message">
          Lo sentimos, la página que estás buscando no existe o ha sido movida. Puede que hayas
          seguido un enlace incorrecto o la URL haya cambiado.
        </p>
      </div>
      <!-- Acciones disponibles -->
      <div class="actions">
        <RouterLink
          class="btn btn-primary"
          :to="{ name: 'inicio' }"
          exact-active-class="clase-activa"
        >
          Volver al inicio
        </RouterLink>
      </div>

      <!-- Información adicional -->
      <div class="additional-info">
        <p>Si crees que esto es un error, por favor contacta con nuestro equipo de soporte.</p>
        <p>Error 404 - Recurso no encontrado</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.not-found-container {
  width: 100%;
  background-color: #faf3e0;
  height: 100vh;
  padding: 40px;
  position: relative;
  overflow: hidden;
}
.not-found-content {
  position: relative;
  z-index: 1;
  display: grid;
}
.text-informatio {
  text-align: center;
}
.text-informatio p {
  text-align: justify;
}
.error-code {
  font-size: 8rem;
  font-weight: 900;
  margin-bottom: 10px;
}
.error-code {
  color: #ff4b5c;
}

.error-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #1e2a38;
  font-weight: 600;
}

.error-message {
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: #1e2a38;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* Acciones */
.actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 40px;
}

.btn {
  padding: 15px 30px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  border: none;
}

.btn-primary {
  background-color: #ff4b5c;
  color: #faf3e0;
  box-shadow: 0 5px 15px rgba(255, 75, 92, 0.3);
}

.btn-primary:hover {
  background-color: #e03a4b;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(255, 75, 92, 0.4);
}

.btn-secondary {
  background-color: transparent;
  color: #1e2a37;
  border: 2px solid #1e2a37;
}

.btn-secondary:hover {
  background-color: rgba(135, 182, 250, 0.1);
  transform: translateY(-3px);
}

.additional-info {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #1e2a37;
  font-size: 0.9rem;
  color: #1e2a37;
  text-align: center;
}

/* Elementos decorativos */
.decoration-circle {
  position: absolute;
  border-radius: 50%;
  z-index: 0;
}

.circle-1 {
  width: 120px;
  height: 120px;
  background-color: rgba(255, 75, 92, 0.45);
  top: -40px;
  left: -40px;
}

.circle-2 {
  width: 80px;
  height: 80px;
  background-color: rgba(135, 182, 250, 1);
  bottom: -20px;
  right: 10%;
}

.circle-3 {
  width: 60px;
  height: 60px;
  background-color: rgba(28, 100, 182, 0.5);
  top: 20%;
  right: -10px;
}
</style>

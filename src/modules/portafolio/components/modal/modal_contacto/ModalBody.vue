<template>
  <div class="div-modal-body-msg">
    <form class="form-modal-msg">
      <div class="mb-3">
        <label for="email" class="form-label">Agrega tu email</label>
        <input type="email" class="form-control" id="email" name='' placeholder="nombre@ejemplo.com">
      </div>
      <div class="mb-3">
        <label for="mensajeText" class="form-label">Como puedo ayudarte?</label>
        <textarea class="form-control" id="mensajeText" placeholder="Aqui va tu mensaje." rows="3"></textarea>
      </div>
      <div class="mb-2">
         <button class="form-submit-btn" type="submit">Enviar mensaje</button>
      </div>
    </form>
  </div>
</template>
<style scoped>
label{
color: #ffffff;
}

.div-modal-body-msg{
  width: 100%;
  display:flex;
  flex-direction: column;
}

.form-submit-btn {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  align-self: flex-start;
  font-family: inherit;
  color: var(--negro-suave);
  font-weight: 600;
  width: 40%;
  background: var(--amarillo);
  border: 3px solid var(--negro-suave);
  padding: 12px 16px;
  font-size: inherit;
  gap: 8px;
  margin-top: 8px;
  cursor: pointer;
  border-radius: 10px;
}
</style>

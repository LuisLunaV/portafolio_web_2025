<template>
     <form v-on:submit.prevent="sendMessage" class="form-modal-msg">
      <div class="mb-3">
        <label for="email" class="form-label poppins-medium">Agrega tu email</label>
        <input v-model="formMessage.Msg_Email" type="email" class="form-control" id="email" name='' placeholder="nombre@ejemplo.com">
      </div>
      <div class="mb-3">
        <label for="mensajeText" class="form-label poppins-medium">Como puedo ayudarte?</label>
        <textarea v-model="formMessage.Msg_Text" class="form-control" id="mensajeText" placeholder="Aqui va tu mensaje." rows="3"></textarea>
      </div>
      <div class="mb-2">
         <button class="form-submit-btn" type="submit">Enviar mensaje</button>
      </div>
    </form>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';

const formMessage = reactive({
  Msg_Email: '',
  Msg_Text: ''
});

const sendMessage=():void=>{
  alert(JSON.stringify(formMessage))
}

</script>

<style scoped>
label{
color: #ffffff;
}

.form-submit-btn {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  align-self: flex-start;
  font-family: inherit;
  color: #fff;
  font-weight: 600;
  width: 40%;
  background: #212529;
  border:2.5px solid var(--amarillo);
  padding: 12px 16px;
  font-size: inherit;
  gap: 8px;
  margin-top: 8px;
  cursor: pointer;
  border-radius: 10px;
  transition: 500ms;
}

.form-submit-btn:hover{
  color: var(--negro-suave);
  background: var(--amarillo);
  border:2.5px solid #212529;
}
</style>

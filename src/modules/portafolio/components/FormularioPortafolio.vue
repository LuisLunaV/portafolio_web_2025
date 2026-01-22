<template>
  <form v-on:submit.prevent="sendMessage" class="form-modal-msg">
    <div class="mb-3">
      <label for="email" class="form-label poppins-medium">Agrega tu email</label>
      <input
        v-model="formMessage.Msg_email"
        type="email"
        class="form-control"
        id="email"
        name=""
        placeholder="nombre@ejemplo.com"
        required
      />
      <ErrorMessages v-if="errorMessage?.path === 'Msg_email'" :error="errorMessage" />
    </div>
    <div class="mb-3">
      <label for="mensajeText" class="form-label poppins-medium">Como puedo ayudarte?</label>
      <textarea
        v-model="formMessage.Msg_texto"
        class="form-control"
        id="mensajeText"
        placeholder="Agrega tu mensaje mas numero de contacto (opcional)"
        rows="3"
        required
      ></textarea>
      <ErrorMessages v-if="errorMessage?.path === 'Msg_texto'" :error="errorMessage" />
    </div>
    <div class="mb-2">
      <button class="form-submit-btn" type="submit">Enviar mensaje</button>
    </div>
  </form>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { postMessages } from '@/modules/services/api-post'
import { type IErrorMsg } from '@/modules/portafolio/interfaces/mensajes.interface'
// composables
// stores
import {
  useLoadingStore,
  useAlerts,
  useModalStores,
  useErrorEscudos,
} from '@/modules/portafolio/stores/modal.stores'
// components
import ErrorMessages from '@/modules/portafolio/components/errors/ErrorMessages.vue'

const formMessage = reactive({
  Msg_email: '',
  Msg_texto: '',
})

const loader = useLoadingStore()
const alertSucces = useAlerts()
const errorEscudos = useErrorEscudos()
const { modificarValor } = useModalStores()
const errorMessage = ref<IErrorMsg | null>(null)

const sendMessage = async (): Promise<void> => {
  try {
    if (await postMessages(formMessage)) {
      loader.activeLoader()
      setTimeout(() => {
        loader.stopLoader()
        formMessage.Msg_email = ''
        formMessage.Msg_texto = ''
        modificarValor()
        alertSucces.showAlert()
      }, 3000)
    }
  } catch (error: any) {
    if (error.value != formMessage.Msg_texto) {
      modificarValor();
      errorEscudos.showErrorEsc()
    }

    errorMessage.value = error
    setTimeout(() => {
      errorMessage.value = null
    }, 4000)
  }
}
</script>

<style scoped>
label {
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
  border: 2.5px solid var(--amarillo);
  padding: 12px 16px;
  font-size: inherit;
  gap: 8px;
  margin-top: 8px;
  cursor: pointer;
  border-radius: 10px;
  transition: 500ms;
}

.form-submit-btn:hover {
  color: var(--negro-suave);
  background: var(--amarillo);
  border: 2.5px solid #212529;
}
</style>

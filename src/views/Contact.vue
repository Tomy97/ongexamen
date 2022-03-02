<template>
  <div class="container p-5 mt-lg-5">
    <div class="row">
      <div class="col-md-12 d-flex justify-content-center">
        <div class="card card-style">
          <div class="card-title">
            <h5 class="text-center">Formulario de contacto</h5>
          </div>
          <div class="card-body">
            <form @submit="onSubmit">
              <div class="row">
                <div class="col-md-6">
                  <FormName
                    v-model="name"
                    label="Nombre"
                    placeholder="Ingrese su nombre"
                  />
                </div>
                <div class="col-md-6">
                  <FormEmail
                    v-model="email"
                    label="Email"
                    placeholder="Ingrese su email"
                    required
                  />
                </div>
              </div>
              <div class="row my-3">
                <div class="col-md-12">
                  <FormTextArea
                    v-model="textArea"
                    label="Danos tu opinión"
                    placeholder="Ingrese su mensaje"
                    required
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 d-flex justify-content-end">
                  <button
                    type="submit"
                    class="btn btn-primary btn-block btn-dog"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useForm } from "vee-validate";

import FormEmail from "../components/Form/FormEmail.vue";
import FormName from "@/components/Form/FormName.vue";
import FormTextArea from "@/components/Form/FormTextArea.vue";

export default defineComponent({
  components: {
    FormEmail,
    FormName,
    FormTextArea,
  },
  setup() {
    const email = ref<string>("");
    const name = ref<string>("");
    const textArea = ref<string>("");
    const { handleSubmit } = useForm();
    const onSubmit = handleSubmit(async () => {
      return true;
    });
    return {
      onSubmit,
      textArea,
      email,
      name,
    };
  },
});
</script>

<style>
.card-style {
  width: 50rem;
}

.btn {
  width: 9rem;
}

.btn-dog {
  background: #faac18;
  border: #faac18;
}
.btn-dog:hover {
  background: #c48c25;
  border: #c48c25;
}
</style>
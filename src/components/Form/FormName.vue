<template>
  <div>
    <div class="form-group">
      <label class="fw-bold form-label"> {{ label }} </label>
      <input
        v-model="field"
        autocomplete="false"
        type="alpha_spaces"
        :placeholder="placeholder"
        :required="required"
        class="form-control"
        :disabled="disabled"
      />
    </div>
    <span class="text-danger">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script lang="ts">
import {
  ComponentInternalInstance,
  defineComponent,
  getCurrentInstance,
  watch,
} from "vue";
import { defineRule, useField } from "vee-validate";
import { required, alpha_spaces } from "@vee-validate/rules";
defineRule("alpha_spaces", alpha_spaces);

defineRule("required", required);
export default defineComponent({
  props: {
    modelValue: {
      type: String,
    },
    label: {
      type: String,
      default: "formularios.nombreCompleto.label",
    },
    placeholder: {
      type: String,
      default: "formularios.nombreCompleto.placeholder",
    },
    required: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const instance = getCurrentInstance() as ComponentInternalInstance;

    const {
      value: field,
      errorMessage,
      meta,
    } = useField(
      "input-" + instance.uid.toString(),
      { required: props.required, alpha_spaces: true },
      {
        initialValue: props.modelValue,
        label: props.label.toString().toLowerCase(),
      }
    );

    watch(field, (val) => emit("update:modelValue", val));
    return {
      field,
      errorMessage,
      meta,
    };
  },
});
</script>

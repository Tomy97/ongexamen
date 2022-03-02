<template>
  <div>
    <div class="form-group">
      <label class="fw-bold form-label "> {{ label }} </label>
      <input
        v-model="field"
        autocomplete="false"
        type="email"
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
  watch,
  getCurrentInstance,
} from "vue";
import { defineRule, useField } from "vee-validate";
import { required, email } from "@vee-validate/rules";

defineRule("required", required);
defineRule("email", email);
export default defineComponent({
  props: {
    modelValue: {
      type: String,
    },
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
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
      {
        required: props.required,
        email: true,
      },
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

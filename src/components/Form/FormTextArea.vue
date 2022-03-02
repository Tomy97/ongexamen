<template>
  <div>
    <div class="form-group">
      <label class="fw-bold form-label"> {{ label }} </label>
      <textarea 
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
      "input-" + instance ? instance.uid.toString() : "0",
      { required: props.required },
      {
        initialValue: props.modelValue,
        label: props.label,
      }
    );

    watch(field, (value) => emit("update:modelValue", value));

    return {
      field,
      errorMessage,
      meta,
    };
  },
});
</script>

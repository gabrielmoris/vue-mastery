<template>
  <input
    type="email"
    class="form-control"
    placeholder="E-mail"
    :value="modelValue"
    @input="update($event)"
    :class="{
      'is-valid': validateEmail(modelValue),
      'is-invalid': !validateEmail(modelValue),
    }"
  />
</template>

<script>
import validateEmail from "../validateEmail(separation-of-concerns)";
export default {
  name: "EmailInput",
  props: ["modelValue"],
  methods: {
    update($event) {
      // I am updating the prop "modelvalue"
      this.$emit("update:modelValue", $event.target.value);
    },
    validateEmail,
  },
};
</script>

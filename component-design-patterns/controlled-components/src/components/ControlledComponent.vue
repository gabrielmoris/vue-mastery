<template>
  <input
    type="email"
    class="form-control"
    placeholder="E-mail"
    :value="modelValue"
    @input="update($event)"
    :class="{
      'is-valid': modelValue.length >= 4 && modelValue.length > 0,
      'is-invalid': modelValue.length < 4 && modelValue.length > 0,
    }"
  />
</template>

<script>
export default {
  name: "EmailInput",
  props: ["modelValue"],
  methods: {
    update($event) {
      // I am updating the prop "modelvalue"
      this.$emit("update:modelValue", $event.target.value);
    },
  },
};
</script>

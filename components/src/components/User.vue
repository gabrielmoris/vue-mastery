<template>
  <div>The user is {{ age }} years old.</div>
  <p>{{ ageDoubled }}</p>
  <button @click="onClickAge()">Update Age</button>
</template>

<script>
export default {
  name: "User",
  props: ["age"],
  emits: ["age-change"],
  computed: {
    ageDoubled() {
      return this.age * 2;
    },
  },
  methods: {
    onClickAge() {
      this.$emit("age-change", 3);
    },
  },
};
</script>

<style lang="scss" scoped></style>

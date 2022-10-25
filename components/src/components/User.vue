<template>
  <div>The user is {{ age }} years old.</div>
  <p>{{ ageDoubled }}</p>
  <button @click="onClickAge()">Update Age $emit event</button>
  <button @click="ageChangeFn(5)">Update Age With Callback</button>
</template>

<script>
export default {
  name: "User",
  // Props + validation(Instead of props:["age"])
  props: {
    age: {
      type: [Number, String],
      // required: true, If I put default I dont need required
      default: 20,
      validator(value) {
        return value < 126;
      },
    },
    ageChangeFn: Function,
  },
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

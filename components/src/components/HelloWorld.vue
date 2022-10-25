<template>
  <p v-if="age > 25">{{ msg }}</p>
  <p v-else>You must be 25 years or older to view this message</p>
</template>

<script>
export default {
  name: "HelloWorld",
  props: ["age"],
  data() {
    return { msg: "Hello World!" };
  },
};
</script>

<style lang="scss" scoped>
p {
  color: red;
  &:hover {
    color: darken(#cc4444, 15%);
  }
}
</style>

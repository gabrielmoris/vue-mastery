<template>
  <div v-if="!flag" style="color: red">Name Changed</div>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["user"],
  //HOW to access props inside of the setup(). Using "this" doesntwork here
  // the second parameter context is equivalent to "this"
  setup(props, context) {
    const flag = computed(() => {
      return props.user.name === "John";
    });
    return { flag };
  },
};
</script>

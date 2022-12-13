<template>
  <div>
    <p>{{ num }}</p>
    <button @click.prevent="increment">increment</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    // We need to make the number reactive, that is why we use ref
    let num = ref(0);
    function increment() {
      // to change the value of the ref, we acces by variable.value
      num.value++;
    }
    return { num, increment };
  },
};
</script>

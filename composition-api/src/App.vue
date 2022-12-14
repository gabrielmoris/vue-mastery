<template>
  <div>
    <p>{{ num }}</p>
    <button @click.prevent="increment">increment</button>
    <p>{{ user.name }}</p>
    <p>{{ name }}</p>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
export default {
  name: "App",
  setup() {
    // We need to make the number reactive, that is why we use ref
    let num = ref(0);
    function increment() {
      // to change the value of the ref, we acces by variable.value
      num.value++;
    }
    //User logic, I can separate now the functions and put then together with the data
    //To make it reactive I dont use ref, i use reactive instead
    const user = reactive({
      name: "John",
      age: 20,
    });

    setTimeout(() => {
      user.name = "CENA";
      user2.name = "Saludos!";
    }, 3000);

    const user2 = reactive({ name: "gabriel", age: 20 });

    return { num, increment, user, ...toRefs(user2) };
  },
};
</script>

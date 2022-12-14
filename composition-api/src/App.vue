<template>
  <div>
    <p>Normal: {{ num }}</p>
    <p>Computed: {{ double }}</p>
    <button @click.prevent="increment">increment</button>
    <p>reactive(): {{ user.name }}</p>
    <p>toRefs(): {{ name }}</p>
    <input type="text" v-model="sentence" />
    <p>Watcher V1 (Reverse): {{ reversed }}</p>
    <p>Watcher V2 (Mixes): {{ mixed }}</p>
  </div>
</template>

<script>
import { ref, reactive, toRefs, watchEffect, watch, computed } from "vue";
export default {
  name: "App",
  setup() {
    //User logic, I can separate now the functions and put then together with the data
    // We need to make the number reactive, that is why we use ref
    let num = ref(0);
    function increment() {
      // to change the value of the ref, we acces by variable.value
      num.value++;
    }

    //Computed properties//
    const double = computed(() => {
      return num.value * 2;
    });
    //To make it reactive I dont use ref, i use reactive instead
    const user = reactive({
      name: "John",
      age: 20,
    });
    const user2 = reactive({ name: "gabriel", age: 20 });

    setTimeout(() => {
      user.name = "CENA";
      user2.name = "Saludos!";
    }, 3000);

    const sentence = ref("");
    const reversed = ref("");
    const mixed = ref("");

    // How to use watchers //
    watchEffect(() => {
      reversed.value = sentence.value.split("").reverse().join("");
    });
    //Another way to use watchers (more efficient)
    // the square brackets are optional and allows us to watch several values
    watch([sentence], ([newval, oldval]) => {
      mixed.value = sentence.value
        .split("")
        .sort(function () {
          return 0.5 - Math.random();
        })
        .join("");
    });

    return {
      num,
      increment,
      user,
      ...toRefs(user2),
      sentence,
      reversed,
      mixed,
      double,
    };
  },
};
</script>

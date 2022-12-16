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
    <AppAlert :user="user" />
    <button type="button" ref="btn">template refs</button>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted } from "vue";
import AppAlert from "@/components/Alert.vue";
import { useNumber } from "@/hooks/number";
import { useSentence } from "@/hooks/sentence";

// With setup in script I dont need this
// export default {
// name: "App",
// components: { AppAlert },
//after the name we put all the logic in the setup()
// setup() {
// The setup is create before "this" exists
//To use template Refs I do this and the variable must have the same name as the ref in template
// The rest of it is handled by vue, But i Can accsss only after the component is mounted()
const btn = ref(null);
//lifecycle functions
onBeforeMount(() => {
  console.log("onBeforeMount!");
});
onMounted(() => {
  console.log("onMounted!");
  btn.value.addEventListener("click", () => {
    alert("Clicked!");
  });
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

//Here I call my hooks
// I still have to return them from Setup()
const { num, double, increment } = useNumber();
const { sentence, reversed, mixed, num: sentenceNum } = useSentence();

// Every variable or function used in the template must be returned unles I use the script return
// return {
//   num,
//   increment,
//   user,
//   ...toRefs(user2),
//   sentence,
//   reversed,
//   mixed,
//   double,
//   btn,
//   sentenceNum,
// };
// },
// };

/// I need to make a little change when Iexport the object
const { name } = toRefs(user2);
</script>

<template>
  <h3>Hey!</h3>
  <HelloWorld :age="age" />
  <User :age="age" @age-change="updateAge" />
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import User from "@/components/User.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    User,
  },
  data() {
    return {
      age: 20,
    };
  },
  methods: {
    updateAge(num) {
      this.age += num;
    },
  },
};
</script>

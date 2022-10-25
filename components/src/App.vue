<template>
  <h3>Hey!</h3>
  <HelloWorld :age="age" />
  <User :age="age" @age-change="updateAge" :ageChangeFn="updateAgeCB" />
  <AppForm>
    <template v-slot:help>
      <p>{{ help }}</p>
    </template>
    <template v-slot:fields>
      <input type="text" placeholder="email" />
      <input type="text" placeholder="username" />
      <input type="text" placeholder="password" />
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
    <p>Dummy Text</p>
  </AppForm>
  <AppForm>
    <template v-slot:help>
      <p>This is a second Form.</p>
    </template>
    <template v-slot:fields>
      <input type="text" placeholder="name" />
      <input type="text" placeholder="message" />
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
  </AppForm>
  <AppForm></AppForm>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import User from "@/components/User.vue";
import AppForm from "@/components/AppForm.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    User,
    AppForm,
  },
  data() {
    return {
      age: 20,
      help: "This is just a help text for the form",
    };
  },
  methods: {
    updateAge(num) {
      this.age += num;
    },
    //USING CALLBACK TO CHANGE DATA FROM CHILD
    updateAgeCB(num) {
      this.age += num;
    },
  },
};
</script>

let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!",
    };
  },
  beforeCreate() {
    console.log("beforeCreate() called", this.message);
  },
  created() {
    console.log("created() called", this.message);
  },
  beforeMount() {
    console.log("beforeMount() called", this.$el);
  },
  mounted() {
    console.log("mounted() called", this.$el);
  },
  // to check, in vue dev tools change the mesage
  beforeUpdate() {
    console.log("beforeUpdate() called");
  },
  updated() {
    console.log("updated() called");
  },
  //to see this in console write vm.unmount()
  beforeUnmount() {
    console.log("beforeUnmount() called");
  },
  unmounted() {
    console.log("unmounted() called");
  },
});

setTimeout(() => {
  vm.mount("#app");
}, 3000);

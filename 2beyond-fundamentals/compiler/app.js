// WITH COMPILER
let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world with compiler!",
    };
  },
  template: `{{message}}`,
}).mount("#app");

//WITHOUT COMPILER
let vm2 = Vue.createApp({
  data() {
    return {
      message: "Hello world with no compiler!",
    };
  },
  render() {
    return Vue.h("h1", this.message);
  },
}).mount("#app2");

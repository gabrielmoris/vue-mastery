// WITH COMPILER
let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!",
    };
  },
  template: `{{message}}`,
}).mount("#app");

//WITHOUT COMPILER
let vm2 = Vue.createApp({
  data() {
    return {
      message: "Hello world!",
    };
  },
  render() {
    return Vue.h("h1", this.message);
  },
}).mount("#app2");

let vm = Vue.createApp({});

vm.component("name-of-component", {
  template: `<a href="https://www.helloworld.com" >{{message}}</a>`,
  data() {
    return {
      message: "Hello World!",
    };
  },
});

vm.mount("#app");

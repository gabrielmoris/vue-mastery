const vm = Vue.createApp({
  data() {
    return {
      firstName: "Juan",
      lastName: "Francisco",
      url: "https://www.gabrielcmoris.com",
    };
  },
  methods: {
    fullName() {
      return `${[...this.firstName].reverse().join("")} ${[
        ...this.lastName.toUpperCase(),
      ]
        .reverse()
        .join("")}`;
    },
  },
}).mount("#app");

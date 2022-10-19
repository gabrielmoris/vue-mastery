const vm = Vue.createApp({
  data() {
    return {
      firstName: "Juan",
      lastName: "Francisco",
      url: "https://www.gabrielcmoris.com",
      rawHTML:
        "<a href='https://www.google.com' target='_blank'>Visit Google</a>",
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

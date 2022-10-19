const vm = Vue.createApp({
  data() {
    return {
      firstName: "Juan",
      lastName: "Francisco",
      age: 19,
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
    increment() {
      return this.age++;
    },
    updateLastName(msg, event) {
      //   event.preventDefault(); I use .prevent in the directive
      this.lastName = event.target.value;
      console.log(msg);
    },
  },
}).mount("#app");

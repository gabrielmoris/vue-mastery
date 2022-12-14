const vm = Vue.createApp({
  data() {
    return {
      firstName: "Juan",
      middleName: "",
      lastName: "Francisco",
      age: 19,
      url: "https://www.gabrielcmoris.com",
      rawHTML:
        "<a href='https://www.google.com' target='_blank'>Visit Google</a>",
      isPurple: false,
      selectedColor: "",
      size: 150,
    };
  },
  methods: {
    increment() {
      return this.age++;
    },
    updateLastName(msg, event) {
      //   event.preventDefault(); I use .prevent in the directive
      this.lastName = event.target.value;
      console.log(msg);
    },
    updateMiddleName(e) {
      this.middleName = e.target.value;
    },
  },
  computed: {
    // This should be computed to improve performance and dont be called eacht time the DOM changes
    // Because his value is cached
    fullName() {
      return `${[...this.firstName].reverse().join("")} ${this.middleName} ${[
        ...this.lastName.toUpperCase(),
      ]
        .reverse()
        .join("")}`;
    },
    circle_classes() {
      return { purple: this.isPurple };
    },
  },
  watch: {
    //Can work async (computed can't)
    age(newVal, oldVal) {
      setTimeout(() => {
        this.age = 20;
      }, 3000);
    },
  },
}).mount("#app");

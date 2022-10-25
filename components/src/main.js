import { createApp } from "vue";
import App from "./App.vue";
// import HelloWorld from "@/components/HelloWorld.vue";

let vm = createApp(App);
//If I want to register a component globally (not recommended pratice)
// vm.component("HelloWorld", HelloWorld);
vm.mount("#app");

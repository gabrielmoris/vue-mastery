<template>
  <div id="app">
    <div class="scrollPosition">{{ offset }}</div>
  </div>
</template>

<script>
import mixin from "@/mixin";
export default {
  name: "App",
  mixins: [mixin],
  // If I create data that overlaps the mixin, the mixin has piority
  data() {
    return {
      offset: 1,
    };
  },
  mounted() {
    alert("It also works puttint mounted() in both places");
  },
};
</script>

<style>
#app {
  width: 100%;
  height: 3000px;
  position: relative;
}

.scrollPosition {
  position: fixed;
  left: 10px;
  right: 10px;
}
</style>

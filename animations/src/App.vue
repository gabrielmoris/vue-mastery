<template>
  <button @click="flag = !flag">Toggle</button>
  <!-- I dont name to specify the name, the  predefined is v -->
  <transition name="fade" mode="out-in">
    <h2 v-if="flag" key="main">Hello World!</h2>
    <h2 v-else key="secondary">Goodbye World!</h2>
  </transition>

  <transition name="zoom" type="animation" appear>
    <p v-if="flag">Hi!</p>
  </transition>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      flag: true,
    };
  },
};
</script>

<style scoped>
h2 {
  width: 400px;
  padding: 20px;
  margin: 20px;
}
/* This classnames comes to the transition component from vue */
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 1s linear;
}

.fade-leave-to {
  transition: all 1s linear;
  opacity: 0;
}

/* Other way to do animations (it can be both at the same time) */
.zoom-enter-active {
  animation: zoom-in 1s linear forwards;
  transition: all 2s linear;
}
.zoom-leave-active {
  animation: zoom-out 1s linear forwards;
  transition: all 2s linear;
}

.zoom-enter-from {
  opacity: 0;
}
.zoom-leave-to {
  opacity: 0;
}

@keyframes zoom-in {
  from {
    transform: scale(0, 0);
  }
  to {
    transform: scale(1, 1);
  }
}
@keyframes zoom-out {
  from {
    transform: scale(1, 1);
  }
  to {
    transform: scale(0, 0);
  }
}
</style>

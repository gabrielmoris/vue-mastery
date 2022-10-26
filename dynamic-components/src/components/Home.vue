<template>
  <div>Home Page</div>
</template>

<script>
export default {
  unmounted() {
    console.log(
      "Wrapped with <keep-alive></keep-alive> this component wont be unmounted"
    );
  },
  activated() {
    console.log(
      "Home has been actiated in life cycle instead mounted() because is wrapped with <keep-alive></keep-alive>"
    );
  },
  deactivated() {
    console.log(
      "Home has been deactiated in life cycle instead unmounted() because is wrapped with <keep-alive></keep-alive>"
    );
  },
};
</script>

<style scoped></style>

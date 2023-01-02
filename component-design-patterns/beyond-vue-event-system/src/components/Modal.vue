<template>
  <div class="modal" :style="{ display: show ? 'block' : 'none' }">
    <!-- With the VUE APPROACH The tabindex="0" is used to tell the browser that the element is focusable
    (necesary for using keydown.esc) -->
    <!-- <div
      class="modal-dialog"
      style="z-index: 2000"
      @keydown.esc="close"
      tabindex="0"
      ref="modal"
    > -->
    <div class="modal-dialog" style="z-index: 2000">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Awesome Title</h5>
          <button type="button" class="close" @click="close">
            <span>&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Awesome content.</p>
        </div>
      </div>
    </div>
    <div class="modal-backdrop show"></div>
  </div>
</template>

<script>
export default {
  name: "AppModal",
  props: ["show"],
  methods: {
    close() {
      this.$emit("hide");
    },
    handler(e) {
      if (e.code === "Escape" && this.show) {
        this.close();
      }
    },
  },
  // COMPLICATED APPROACH WITH VUE
  // watch: {
  //   show(newVal) {
  //     if (newVal) {
  //       // This function will run when the document is updated() then we will focus on the modal so we can close it with ESC
  //       this.$nextTick(() => {
  //         this.$refs.modal.focus();
  //       });
  //     }
  //   },
  // },

  // BETTER APPROACH WITHOUT THE VUE EVENT SYSTEM
  created() {
    document.addEventListener("keydown", this.handler);
  },
  unmounted() {
    document.removeEventListener("keydown", this.handler);
  },
};
</script>

<style scoped>
.modal {
  outline: 0;
}
</style>

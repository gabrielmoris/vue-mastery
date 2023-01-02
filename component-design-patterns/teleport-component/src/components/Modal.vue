<template>
  <div class="modal" :style="{ display: show ? 'block' : 'none' }">
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
  props: {
    show: {
      required: true,
    },
    scrollable: {
      default: false,
    },
  },
  watch: {
    // this option has a problem, Vue doesnt watch components when it is created, when show is preset totrue, the scrollbar would be still there
    // show(newVal) {
    //   if (newVal && !this.scrollable) {
    //     document.body.style.setProperty("overflow", "hidden");
    //   } else {
    //     document.body.style.removeProperty("overflow");
    //   }
    // },

    // We solve this issue by using an object instead of a function
    show: {
      immediate: true,
      handler(newVal) {
        if (newVal && !this.scrollable) {
          document.body.style.setProperty("overflow", "hidden");
        } else {
          document.body.style.removeProperty("overflow");
        }
      },
    },
  },
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

<template>
  <div class="mt-2 ml-2" style="opacity: 0.4">
    <button type="button" class="btn btn-primary" @click="open = true">
      Open
    </button>
  </div>
  <!-- Teleport allows me to choose where I render the component in an already existing component before mounting by using a query selector to="div" -->
  <teleport to="body">
    <app-modal :show="open" @hide="open = false" />
  </teleport>
</template>

<script>
import AppModal from "@/components/Modal.vue";
export default {
  name: "AppAction",
  components: {
    AppModal,
  },
  data() {
    return {
      open: false,
    };
  },
};
</script>

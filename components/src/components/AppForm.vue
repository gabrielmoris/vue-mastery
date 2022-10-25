<template>
  <form>
    <div class="help">
      <slot name="help">Default message: Form message</slot>
    </div>
    <div class="fields">
      <slot name="fields">Default message: Form fields</slot>
    </div>
    <div class="buttons">
      <slot name="buttons">Default message: Form buttons</slot>
    </div>
    <!-- This will make accept every extra html that I send -->
    <slot></slot>
  </form>
</template>

<script>
export default { name: "AppForm" };
</script>

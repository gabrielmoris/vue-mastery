<template>
  <div id="app" class="row d-flex justify-content-center">
    <div class="col-md-6 mt-3">
      <div class="card">
        <div class="card-header">Newsletter</div>
        <div class="card-body">
          <form @submit.prevent="submit">
            <div class="mb-2">
              <!-- I use :value and @input instead of v-model -->
              <input
                type="text"
                class="form-control"
                placeholder="Name"
                :value="newsletterName"
                @input="newsletterName = $event.target.value"
              />
            </div>
            <div class="mb-2">
              <!-- The child emits the value. With the Colon (:) I can say the name of the prop I send -->
              <EmailInput v-model:modelValue="newsletterEmail" />
              <!-- This is the same -->
              <!-- <EmailInput
                :modelValue="newsletterEmail"
                @update:modelValue="newsletterEmail = $event"
              /> -->
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmailInput from "@/components/EmailInput.vue";
export default {
  name: "App",
  components: { EmailInput },
  data() {
    return {
      newsletterName: "",
      newsletterEmail: "",
    };
  },
  methods: {
    submit() {
      console.log("Newletter Submitted", {
        name: this.newsletterName,
        email: this.newsletterEmail,
      });
    },
  },
};
</script>

<style src="bootstrap/dist/css/bootstrap.css"></style>

import { ref, watch, watchEffect } from "vue";
export const useSentence = () => {
  const sentence = ref("");
  const reversed = ref("");
  const mixed = ref("");
  const num = ref("");

  // How to use watchers //
  watchEffect(() => {
    reversed.value = sentence.value.split("").reverse().join("");
  });

  //Another way to use watchers (more efficient)
  // the square brackets are optional and allows us to watch several values
  watch([sentence], ([newval, oldval]) => {
    mixed.value = sentence.value
      .split("")
      .sort(function () {
        return 0.5 - Math.random();
      })
      .join("");
  });

  return { sentence, reversed, mixed, num };
};

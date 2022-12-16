import { ref, computed, isRef, isReactive, reactive } from "vue";
export const useNumber = () => {
  //User logic, I can separate now the functions and put then together with the data
  // We need to make the number reactive, that is why we use ref
  let num = ref(0);
  function increment() {
    // to change the value of the ref, we acces by variable.value
    num.value++;
  }

  //Computed properties//
  const double = computed(() => {
    return num.value * 2;
  });

  // Verify Reactivity

  const accounts = reactive({
    checking: 3232,
    savings: 242,
  });
  console.log("is num ref?:", isRef(num));
  console.log("is accounts reactive?", isReactive(accounts));

  return { num, increment, double };
};

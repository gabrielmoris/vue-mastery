import { ref, computed } from "vue";
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
  return { num, increment, double };
};

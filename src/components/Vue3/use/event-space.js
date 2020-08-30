import { ref, computed } from "@vue/composition-api";
export default function useEventSpace() {
  const capacity = ref(0);
  const attending = ref(["John", "Jane", "Steve"]);
  const spacesLeft = computed(() => {
    return capacity.value - attending.value.length;
  });
  function increment() {
    capacity.value++;
  }
  function decrement(){
    capacity.value--;
  }
  return {
    capacity,
    attending,
    spacesLeft,
    increment,
    decrement
  };
}
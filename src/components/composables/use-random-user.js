import { ref } from "@vue/composition-api";
export default function usePromise(fn) {
  const data = ref(null);
  const loading = ref(false);
  const error = ref(null);
  const createPromise = async () => {
    loading.value = true;
    error.value = null;
    data.value = null;
    try {
      data.value = await fn()
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };
  return { data, loading, error, createPromise };
}
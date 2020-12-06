import { ref, computed, watch } from 'vue'

export default function useTest () {
  const count = ref(1)
  const increament = () => {
    count.value++
  }
  watch(count, () => {
    console.log(count.value)
  })
  const doubleCount = computed(() => count.value * 2)
  return {
    count,
    doubleCount,
    increament
  }
}

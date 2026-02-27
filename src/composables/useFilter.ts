import { ref, computed } from 'vue'

export function useFilter<T>(items: T[], key: keyof T) {
  const active = ref<string>('全部')

  const filtered = computed(() => {
    if (active.value === '全部') return items
    return items.filter(item => item[key] === active.value)
  })

  function setActive(value: string) {
    active.value = value
  }

  return { active, filtered, setActive }
}

import { ref, computed } from 'vue'

export function useSearch<T>(items: T[], keys: (keyof T)[]) {
  const query = ref('')

  const results = computed(() => {
    const q = query.value.trim().toLowerCase()
    if (!q) return items
    return items.filter(item =>
      keys.some(key => String(item[key]).toLowerCase().includes(q))
    )
  })

  function setQuery(value: string) {
    query.value = value
  }

  return { query, results, setQuery }
}

<template>
  <div class="lang-switcher">
    <button
      v-for="lang in languages"
      :key="lang.code"
      :class="['lang-button', { 'active': lang.code === currentLang }]"
      @click="$emit('change', lang.code)"
    >
      {{ lang.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
interface Language {
  code: string
  label: string
}

interface Props {
  currentLang?: string
}

withDefaults(defineProps<Props>(), {
  currentLang: 'zh'
})

defineEmits<{
  change: [lang: string]
}>()

const languages: Language[] = [
  { code: 'zh', label: '中' },
  { code: 'en', label: 'En' }
]
</script>

<style scoped>
.lang-switcher {
  display: flex;
  align-items: center;
  background-color: #f3f4f6;
  overflow: hidden;
  border-radius: 8px;
}

.lang-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 28px;
  font-weight: 500;
  color: #111827;
  background-color: white;
  font-size: 0.75rem;
  transition: background-color 0.2s;
}

.lang-button:hover {
  background-color: #f9fafb;
}

.lang-button.active {
  background-color: #E7EBF2;
}

@media (min-width: 768px) {
  .lang-button {
    width: 40px;
    height: 32px;
    font-size: 0.875rem;
  }
}
</style>

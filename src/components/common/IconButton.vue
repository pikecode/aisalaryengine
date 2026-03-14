<template>
  <button
    :class="['icon-button', { 'has-badge': badge }]"
    @click="$emit('click')"
  >
    <slot />
    <span v-if="badge" class="badge">{{ badge }}</span>
  </button>
</template>

<script setup lang="ts">
interface Props {
  badge?: string | number
}

defineProps<Props>()

defineEmits<{
  click: []
}>()
</script>

<style scoped>
.icon-button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 0.5rem;
  color: #4b5563;
  transition: background-color 0.2s;
}

.icon-button:hover {
  background-color: #f3f4f6;
}

.badge {
  position: absolute;
  top: -0.125rem;
  right: -0.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  background-color: #ef4444;
  color: white;
  font-size: 9px;
  border-radius: 50%;
}

@media (min-width: 768px) {
  .icon-button {
    width: 2.25rem;
    height: 2.25rem;
  }
}
</style>
<template>
  <div class="space-y-4">
    <SkeletonCard v-for="n in count" :key="n" />
  </div>
</template>

<script setup lang="ts">
import SkeletonCard from './SkeletonCard.vue'

// Props
interface Props {
  count?: number
}

withDefaults(defineProps<Props>(), {
  count: 3
})
</script>
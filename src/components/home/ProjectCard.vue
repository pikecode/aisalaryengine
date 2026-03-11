<template>
  <div
    class="rounded-2xl p-6 transition-all duration-200 cursor-pointer hover:shadow-lg"
    :class="isFeatured ? 'bg-gradient-to-br from-gray-800 to-gray-900 text-white' : 'bg-white text-gray-900'"
  >

    <!-- Header -->
    <div class="flex items-start justify-between mb-4">
      <!-- Icon -->
      <div
        class="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl"
        :class="isFeatured ? 'bg-blue-600' : 'bg-gray-700'"
      >
        📄
      </div>

      <!-- Cost Badge -->
      <div
        class="text-4xl font-bold"
        :class="isFeatured ? 'text-gray-400' : 'text-gray-300'"
      >
        0<span class="text-base font-normal ml-1">成本</span>
      </div>
    </div>

    <!-- Price -->
    <div class="mb-4">
      <div
        class="text-xl font-bold mb-3"
        :class="isFeatured ? 'text-white' : 'text-gray-900'"
      >
        潜力: ¥{{ priceRange }}/月
      </div>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in project.tags.slice(0, 3)"
          :key="tag"
          class="text-xs px-3 py-1 rounded"
          :class="isFeatured ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'"
        >
          {{ tag }}
        </span>
      </div>
    </div>

    <!-- Title & Stats -->
    <div class="flex items-start justify-between mb-3">
      <h3
        class="text-base font-semibold flex-1"
        :class="isFeatured ? 'text-white' : 'text-gray-900'"
      >
        {{ project.title }}
      </h3>
      <div
        class="text-xs flex items-center gap-1 ml-2"
        :class="isFeatured ? 'text-gray-400' : 'text-gray-500'"
      >
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        {{ project.views }}人实践
      </div>
    </div>

    <!-- Description -->
    <p
      class="text-sm leading-relaxed"
      :class="isFeatured ? 'text-gray-400' : 'text-gray-600'"
    >
      {{ project.description }}
    </p>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Project } from '@/types'

const props = defineProps<{
  project: Project
  isFeatured?: boolean
}>()

const priceRange = computed(() => {
  const match = props.project.revenue.match(/(\d+)-(\d+)/)
  return match ? `${match[1]}k~${match[2]}k` : '5k~20k'
})
</script>

<template>
  <div class="bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-[20px] flex flex-col group cursor-pointer hover:shadow-lg transition-all duration-300 h-full overflow-hidden">
    <!-- Image Area -->
    <div class="w-full h-32 md:h-40 overflow-hidden">
      <img
        :src="pillar.image"
        :alt="pillar.title"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Content -->
    <div class="flex-1 pt-[10px] pb-4 md:pb-6 pl-[30px] pr-4 md:pr-6 flex flex-col">
      <h3 class="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{{ pillar.title }}</h3>
      <p class="text-xs md:text-sm text-gray-600 leading-relaxed mb-3 md:mb-4 flex-1">{{ pillar.desc }}</p>
    </div>

    <!-- Learn More Link -->
    <a
      :href="pillar.link"
      class="flex items-center justify-end gap-2 text-gray-600 text-xs md:text-sm font-medium group-hover:text-blue-600 transition-colors pb-[40px] pr-[30px]"
    >
      <span>了解更多</span>
      <svg class="w-3.5 md:w-4 h-3.5 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </a>
  </div>
</template>

<script setup lang="ts">
import type { Pillar } from '@/data/pillars'

interface Props {
  pillar: Pillar
  index: number
}

defineProps<Props>()
</script>
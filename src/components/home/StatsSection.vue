<template>
  <!-- Hidden on mobile since stats are shown inside HeroSection -->
  <section class="hidden md:block py-8 bg-white border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <div class="grid grid-cols-3 gap-4 md:gap-8">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="text-center"
        >
          <div class="text-3xl md:text-4xl font-bold text-blue-600 mb-1">{{ stat.value }}</div>
          <div class="text-sm md:text-base text-gray-500">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Stat } from '@/types'

const stats: Stat[] = [
  { value: '200+', label: '经过验证的创业脚本', icon: '' },
  { value: '5000+', label: '早期创客已加入', icon: '' },
  { value: '100+', label: '社区分享的实战案例', icon: '' }
]
</script>

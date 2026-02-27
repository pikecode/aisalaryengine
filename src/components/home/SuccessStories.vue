<template>
  <section class="py-12 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <div class="text-center mb-8">
        <h2 class="section-title">加入他们的成功之旅</h2>
        <p class="section-subtitle">真实创客，真实收益</p>
      </div>

      <!-- Mobile: horizontal scroll, PC: grid -->
      <div class="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto pb-2 md:overflow-visible scrollbar-hide">
        <div
          v-for="story in stories"
          :key="story.id"
          class="card p-5 flex-shrink-0 w-72 md:w-auto hover:shadow-md transition-all"
        >
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              {{ story.username[0] }}
            </div>
            <div>
              <div class="font-semibold text-gray-900 text-sm">{{ story.username }}</div>
              <div class="text-xs text-gray-500">{{ story.role }}</div>
            </div>
            <div class="ml-auto text-green-600 font-bold text-sm">{{ story.revenue }}</div>
          </div>

          <!-- Mock chart/screenshot area -->
          <div class="h-28 bg-gradient-to-br rounded-xl mb-3 flex items-center justify-center"
            :class="story.gradientClass">
            <div class="text-center">
              <div class="text-2xl font-bold text-white">{{ story.revenue }}</div>
              <div class="text-white/70 text-xs mt-1">月收益</div>
            </div>
          </div>

          <p class="text-xs text-gray-500 leading-relaxed">{{ story.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { mockStories } from '@/data/content'

const stories = mockStories
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
</style>

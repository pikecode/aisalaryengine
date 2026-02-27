<template>
  <!-- H5: horizontal list card, PC: vertical grid card -->
  <div class="card hover:shadow-md transition-all duration-200 cursor-pointer group">

    <!-- H5 list layout -->
    <div class="flex md:hidden p-3 gap-3 relative">
      <!-- 0成本 badge -->
      <div class="absolute top-3 left-3 z-10">
        <span class="text-xs bg-green-500 text-white px-1.5 py-0.5 rounded font-medium">0成本</span>
      </div>

      <!-- Left content -->
      <div class="flex-1 pt-5">
        <h3 class="font-semibold text-gray-900 text-sm mb-1 group-hover:text-blue-600 transition-colors line-clamp-1">
          {{ project.title }}
        </h3>

        <!-- Stars / difficulty -->
        <div class="flex items-center gap-1 mb-1.5">
          <span class="text-xs text-gray-400">门槛</span>
          <span v-for="i in 3" :key="i" class="text-xs" :class="i <= project.difficulty ? 'text-yellow-400' : 'text-gray-200'">★</span>
        </div>

        <!-- Tags -->
        <div class="flex flex-wrap gap-1 mb-2">
          <span v-for="tag in project.tags.slice(0, 3)" :key="tag"
            class="text-xs px-1.5 py-0.5 rounded bg-blue-50 text-blue-600">{{ tag }}</span>
        </div>

        <p class="text-xs text-gray-500 line-clamp-2 mb-2">{{ project.description }}</p>

        <!-- Revenue + people -->
        <div class="flex items-center justify-between">
          <div>
            <span class="text-xs text-gray-400">潜力：</span>
            <span class="text-sm font-bold text-green-600">{{ project.revenue }}</span>
            <span class="text-xs text-gray-400 ml-1">{{ project.views }}人实践</span>
          </div>
          <button class="text-xs bg-indigo-600 text-white px-3 py-1.5 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
            立即上车
          </button>
        </div>
      </div>

      <!-- Right illustration -->
      <div class="w-20 h-20 flex-shrink-0 self-center rounded-xl overflow-hidden bg-gradient-to-br flex items-center justify-center text-3xl"
        :class="cardGradient">
        {{ categoryEmoji }}
      </div>
    </div>

    <!-- PC vertical layout -->
    <div class="hidden md:block">
      <!-- Cover -->
      <div class="h-28 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="w-14 h-14 bg-white/60 rounded-2xl flex items-center justify-center text-2xl">
            {{ categoryEmoji }}
          </div>
        </div>
        <div class="absolute top-3 right-3">
          <span class="text-xs px-2 py-1 rounded-full font-medium"
            :class="{
              'bg-green-100 text-green-700': project.category === '副业',
              'bg-blue-100 text-blue-700': project.category === '创业',
              'bg-purple-100 text-purple-700': project.category === '工具'
            }">
            {{ project.category }}
          </span>
        </div>
      </div>

      <div class="p-4">
        <h3 class="font-semibold text-gray-900 text-sm mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
          {{ project.title }}
        </h3>
        <p class="text-xs text-gray-500 mb-3 line-clamp-2">{{ project.description }}</p>
        <div class="flex flex-wrap gap-1 mb-3">
          <span v-for="tag in project.tags.slice(0, 2)" :key="tag" class="tag">{{ tag }}</span>
        </div>
        <div class="flex items-center justify-between">
          <div class="text-sm font-semibold text-green-600">{{ project.revenue }}</div>
          <div class="flex items-center gap-3 text-xs text-gray-400">
            <span class="flex items-center gap-1">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {{ project.views }}
            </span>
            <span class="flex items-center gap-1">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {{ project.likes }}
            </span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Project } from '@/types'

const props = defineProps<{ project: Project }>()

const categoryEmoji = computed(() => {
  const map: Record<string, string> = { '副业': '💰', '创业': '🚀', '工具': '🛠️' }
  return map[props.project.category] ?? '✨'
})

const cardGradient = computed(() => {
  const map: Record<string, string> = {
    '副业': 'from-yellow-50 to-orange-100',
    '创业': 'from-blue-50 to-indigo-100',
    '工具': 'from-purple-50 to-pink-100'
  }
  return map[props.project.category] ?? 'from-gray-50 to-gray-100'
})
</script>

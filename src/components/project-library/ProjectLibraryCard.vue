<template>
  <div class="bg-white rounded-xl md:rounded-2xl p-3 md:p-6 hover:shadow-lg transition-all relative">
    <!-- Cost Badge -->
    <span class="absolute top-2 right-2 md:top-4 md:right-4 px-2 md:px-3 py-0.5 md:py-1 bg-blue-600 text-white text-[10px] md:text-xs font-medium rounded-full">
      {{ costLabel }}
    </span>

    <div class="flex items-start gap-2 md:gap-4 mb-2 md:mb-4">
      <!-- Icon -->
      <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex-shrink-0"></div>

      <div class="flex-1">
        <!-- Revenue -->
        <h3 class="text-sm md:text-lg font-bold text-gray-900 mb-1">
          潜力：¥{{ project.revenue }}/月
        </h3>

        <!-- Difficulty -->
        <div class="flex items-center gap-1 mb-1.5 md:mb-2">
          <span class="text-xs md:text-sm text-gray-500">门槛：</span>
          <div class="flex gap-0.5">
            <svg
              v-for="i in 5"
              :key="i"
              class="w-3 h-3 md:w-4 md:h-4"
              :class="i <= difficulty ? 'text-yellow-400' : 'text-gray-300'"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>

        <!-- Tags -->
        <div class="flex flex-wrap gap-1 md:gap-2 mb-2">
          <span
            v-for="tag in project.tags.slice(0, 3)"
            :key="tag"
            class="px-1.5 md:px-3 py-0.5 md:py-1 bg-purple-100 text-purple-600 text-[10px] md:text-xs rounded-lg"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>

    <!-- Title -->
    <h4 class="font-semibold text-sm md:text-base text-gray-900 mb-1.5 md:mb-2">{{ project.title }}</h4>

    <!-- Description -->
    <p class="text-xs md:text-sm text-gray-600 mb-2 md:mb-4 line-clamp-2">{{ project.description }}</p>

    <!-- Views -->
    <div class="text-[10px] md:text-xs text-gray-400 mb-2 md:mb-4">这 {{ project.views }}人关注</div>

    <!-- Actions -->
    <div class="flex flex-col md:flex-row gap-2">
      <button
        @click="$emit('action', 'generate', project)"
        class="w-full md:flex-1 px-3 md:px-4 py-2 bg-blue-600 text-white text-xs md:text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors btn-mobile"
      >
        一键自动生成项目
      </button>
      <div class="flex gap-2">
        <button
          @click="$emit('action', 'share', project)"
          class="flex-1 md:flex-none px-3 md:px-4 py-2 bg-gray-100 text-gray-700 text-xs md:text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors btn-mobile"
        >
          分享
        </button>
        <button
          @click="$emit('action', 'favorite', project)"
          class="flex-1 md:flex-none px-3 md:px-4 py-2 bg-gray-100 text-gray-700 text-xs md:text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors btn-mobile"
        >
          收藏
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Project } from '@/types'

// Props
const props = defineProps<{
  project: Project
}>()

// Emits
defineEmits<{
  action: [action: string, project: Project]
}>()

// Computed
const costLabel = computed(() => {
  const cost = props.project.cost ?? 0
  if (cost === 0) return '0成本'
  if (cost < 1000) return '千元级'
  if (cost < 10000) return '万元级'
  return '百万级+'
})

const difficulty = computed(() => {
  return props.project.difficulty || 1
})
</script>

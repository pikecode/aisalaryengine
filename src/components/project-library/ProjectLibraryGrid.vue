<template>
  <div class="flex-1">
    <!-- Recommendation Card -->
    <div class="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl md:rounded-2xl p-4 md:p-8 mb-4 md:mb-6 text-white relative overflow-hidden">
      <div class="relative z-10">
        <h3 class="text-lg md:text-2xl font-bold mb-1 md:mb-2">还没找到方向</h3>
        <p class="text-blue-100 mb-3 md:mb-4 text-sm md:text-base">先进行1分钟自我评估</p>
        <button class="px-4 md:px-6 py-2 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors text-sm md:text-base">
          立即测评
        </button>
      </div>
      <div class="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-16 h-16 md:w-32 md:h-32 bg-white/10 rounded-full"></div>
    </div>

    <!-- Project Grid -->
    <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      <SkeletonProjectCard v-for="n in 6" :key="n" />
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      <ProjectLibraryCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
        @action="handleProjectAction"
      />
    </div>

    <!-- Load More -->
    <div v-if="hasMore" class="text-center mt-6 md:mt-8">
      <button
        @click="$emit('load-more')"
        :disabled="loading"
        class="px-6 md:px-8 py-2.5 md:py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg md:rounded-xl transition-colors disabled:opacity-50 text-sm md:text-base"
      >
        {{ loading ? '加载中...' : '加载更多项目' }}
      </button>
    </div>

    <!-- Empty State -->
    <div v-if="projects.length === 0 && !loading" class="text-center py-16">
      <div class="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
        <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 6.306a7.962 7.962 0 00-6 0m6 0V3a1 1 0 00-1-1H10a1 1 0 00-1 1v3.306" />
        </svg>
      </div>
      <h3 class="text-lg font-semibold text-gray-900 mb-2">暂无匹配项目</h3>
      <p class="text-gray-500">尝试调整筛选条件或搜索关键词</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectLibraryCard from './ProjectLibraryCard.vue'
import SkeletonProjectCard from '@/components/common/SkeletonProjectCard.vue'
import type { Project } from '@/types'

// Props
defineProps<{
  projects: Project[]
  loading?: boolean
  hasMore?: boolean
}>()

// Emits
const emit = defineEmits<{
  'load-more': []
  'project-action': [action: string, project: Project]
}>()

// Methods
const handleProjectAction = (action: string, project: Project) => {
  emit('project-action', action, project)
}
</script>
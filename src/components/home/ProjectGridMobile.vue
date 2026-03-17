<template>
  <section class="py-8 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4">

      <!-- Title -->
      <div class="text-center mb-6">
        <h2 class="text-2xl font-bold text-gray-900">热门创业项目</h2>
      </div>

      <!-- Filter Tabs -->
      <div class="overflow-x-auto scrollbar-hide mb-6">
        <div class="flex gap-2 justify-start">
          <button
            v-for="tab in tabs"
            :key="tab"
            @click="activeTab = tab"
            class="px-4 py-2 rounded-lg text-xs font-medium transition-all whitespace-nowrap"
            :class="activeTab === tab
              ? 'bg-gray-800 text-white'
              : 'bg-white text-gray-600 hover:bg-gray-100'"
          >
            {{ tab }}
          </button>
        </div>
      </div>

      <!-- Leaderboard Banner -->
      <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl px-4 py-3 mb-6 flex items-center justify-between max-w-4xl mx-auto border border-blue-100">
        <div class="flex items-center gap-2 text-xs">
          <div class="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
            1
          </div>
          <span class="text-gray-700 font-medium">张丽丽</span>
          <span class="text-blue-600 font-semibold">赚了50万</span>
        </div>
        <div class="flex flex-col gap-0.5 flex-shrink-0">
          <svg class="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
          </svg>
          <svg class="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <!-- Project Grid -->
      <div class="max-w-6xl mx-auto">
        <!-- First two rows: 3-column layout -->
        <div class="grid grid-cols-1 gap-6 mb-6">
          <!-- First card: spans 2 columns (2/3 width) -->
          <div>
            <ProjectCard
              v-if="store.filteredProjects[0]"
              :project="store.filteredProjects[0]"
              :is-featured="true"
            />
          </div>

          <!-- Two small cards: each spans 1 column -->
          <ProjectCard
            v-if="store.filteredProjects[1]"
            :project="store.filteredProjects[1]"
            :is-featured="false"
          />
          <ProjectCard
            v-if="store.filteredProjects[2]"
            :project="store.filteredProjects[2]"
            :is-featured="false"
          />

          <!-- Right large card: spans 1 column and 2 rows (1/3 width) -->
          <div class="h-full">
            <ProjectCard
              v-if="store.filteredProjects[3]"
              :project="store.filteredProjects[3]"
              :is-featured="false"
              class="h-full"
            />
          </div>
        </div>

        <!-- Third row: 2 cards -->
        <div class="grid grid-cols-1 gap-6">
          <ProjectCard
            v-if="store.filteredProjects[4]"
            :project="store.filteredProjects[4]"
            :is-featured="false"
          />
          <ProjectCard
            v-if="store.filteredProjects[5]"
            :project="store.filteredProjects[5]"
            :is-featured="false"
          />
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useProjectStore } from '@/stores/projects'
import ProjectCard from './ProjectCard.vue'

const store = useProjectStore()
const activeTab = ref('启动资金')
const tabs = ['启动资金', '时间投入', '技术门槛']
</script>

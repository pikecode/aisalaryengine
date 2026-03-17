<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-6">

      <!-- Title -->
      <div class="text-center mb-8">
        <h2 class="section-title">热门创业项目</h2>
      </div>

      <!-- Filter Tabs -->
      <div class="mb-8">
        <div class="flex gap-3 justify-center">
          <button
            v-for="tab in tabs"
            :key="tab"
            @click="activeTab = tab"
            class="px-6 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap"
            :class="activeTab === tab
              ? 'bg-gray-800 text-white'
              : 'bg-white text-gray-600 hover:bg-gray-100'"
          >
            {{ tab }}
          </button>
        </div>
      </div>

      <!-- Leaderboard Banner -->
      <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl px-6 py-4 mb-8 flex items-center justify-between max-w-4xl mx-auto border border-blue-100">
        <div class="flex items-center gap-3 text-base">
          <div class="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            1
          </div>
          <span class="text-gray-700 font-medium">张丽丽</span>
          <span class="text-gray-600">在xxxxx项目中</span>
          <span class="text-blue-600 font-semibold">赚了50万</span>
        </div>
        <div class="flex flex-col gap-0.5 flex-shrink-0">
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
          </svg>
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <!-- Project Grid -->
      <div class="max-w-6xl mx-auto">
        <!-- First two rows: 3-column layout -->
        <div class="grid grid-cols-3 gap-6 mb-6">
          <!-- First card: spans 2 columns (2/3 width) -->
          <div class="col-span-2">
            <ProjectCard
              v-if="store.filteredProjects[0]"
              :project="store.filteredProjects[0]"
              :is-featured="true"
            />
          </div>

          <!-- Right large card: spans 1 column and 2 rows (1/3 width) -->
          <div class="row-span-2 h-full">
            <ProjectCard
              v-if="store.filteredProjects[3]"
              :project="store.filteredProjects[3]"
              :is-featured="false"
              class="h-full"
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
        </div>

        <!-- Third row: 2 cards -->
        <div class="grid grid-cols-2 gap-6">
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

<style scoped>
.section-title {
  width: 379px;
  height: 42px;
  font-family: 'Source Han Sans CN', sans-serif;
  font-weight: bold;
  font-size: 50px;
  color: #393939;
  line-height: 24px;
  text-align: center;
  margin: 0 auto;
}
</style>

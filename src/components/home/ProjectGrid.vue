<template>
  <section class="py-12 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 md:px-6">

      <!-- Title -->
      <div class="text-center mb-6">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">热门创业项目</h2>

        <!-- Filter Tabs -->
        <div class="flex gap-3 justify-center mb-6">
          <button
            v-for="tab in tabs"
            :key="tab"
            @click="activeTab = tab"
            class="px-6 py-2 rounded-lg text-sm font-medium transition-all"
            :class="activeTab === tab
              ? 'bg-gray-900 text-white'
              : 'bg-white text-gray-600 hover:bg-gray-100'"
          >
            {{ tab }}
          </button>
        </div>
      </div>

      <!-- Leaderboard Banner -->
      <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl px-6 py-4 mb-6 flex items-center justify-between max-w-4xl mx-auto border border-blue-100">
        <div class="flex items-center gap-4">
          <div class="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
            1
          </div>
          <span class="text-gray-700 font-medium">张丽丽</span>
          <span class="text-blue-600">在xxxxx项目中</span>
          <span class="text-gray-900 font-bold">赚了50万</span>
        </div>
        <div class="flex flex-col gap-0.5">
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
          </svg>
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <!-- Project Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          v-for="(project, index) in store.filteredProjects"
          :key="project.id"
          :project="project"
          :is-featured="index === 0"
        />
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

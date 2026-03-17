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
            class="filter-tab"
            :class="activeTab === tab ? 'filter-tab-active' : 'filter-tab-inactive'"
          >
            {{ tab }}
          </button>
        </div>
      </div>

      <!-- Leaderboard Banner -->
      <div class="leaderboard-banner">
        <div class="leaderboard-content">
          <div class="leaderboard-rank">1</div>
          <span class="leaderboard-name">张丽丽</span>
          <span class="leaderboard-project">在xxxxx项目中</span>
          <span class="leaderboard-earning">赚了50万</span>
        </div>
        <div class="leaderboard-arrows">
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

.filter-tab {
  width: 110px;
  height: 42px;
  border-radius: 8px;
  font-family: 'PingFang SC', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  transition: all 0.3s;
  cursor: pointer;
  border: none;
}

.filter-tab-active {
  background: #393939;
  color: #FFFFFF;
}

.filter-tab-inactive {
  background: white;
  color: #666666;
}

.filter-tab-inactive:hover {
  background: #f5f5f5;
}

.leaderboard-banner {
  background: linear-gradient(90deg, #E6F4FF 0%, #F0E6FF 100%);
  border-radius: 16px;
  padding: 16px 24px;
  margin: 0 auto 32px;
  max-width: 1024px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #D6E9FF;
}

.leaderboard-content {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
}

.leaderboard-rank {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #1890FF;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
  flex-shrink: 0;
}

.leaderboard-name {
  color: #333333;
}

.leaderboard-project {
  color: #666666;
}

.leaderboard-earning {
  color: #1427FF;
  font-weight: 600;
}

.leaderboard-arrows {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex-shrink: 0;
}
</style>

<template>
  <section class="py-12 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h2 class="section-title">热门创业项目</h2>
          <p class="section-subtitle">精选验证可行的AI变现方向</p>
        </div>
        <RouterLink to="/projects" class="text-blue-600 text-sm font-medium hover:underline self-start md:self-auto">
          查看全部 →
        </RouterLink>
      </div>

      <!-- H5 extra filter tabs -->
      <div class="flex gap-2 mb-4 overflow-x-auto pb-1 scrollbar-hide md:hidden">
        <button
          v-for="f in h5Filters"
          :key="f"
          @click="activeH5Filter = f"
          class="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all border"
          :class="activeH5Filter === f
            ? 'bg-indigo-600 text-white border-indigo-600'
            : 'bg-white text-gray-600 border-gray-200 hover:border-indigo-300'"
        >
          {{ f }}
        </button>
      </div>

      <!-- Category Tabs -->
      <div class="flex gap-2 mb-4 overflow-x-auto pb-1 scrollbar-hide">
        <button
          v-for="cat in store.categories"
          :key="cat"
          @click="store.setCategory(cat)"
          class="flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all"
          :class="store.activeCategory === cat
            ? 'bg-blue-600 text-white shadow-sm'
            : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Leaderboard ticker (H5 only) -->
      <div class="md:hidden bg-white rounded-xl px-3 py-2 mb-4 flex items-center gap-2 border border-gray-100 overflow-hidden">
        <span class="text-xs bg-red-500 text-white px-1.5 py-0.5 rounded font-medium flex-shrink-0">🔥 热榜</span>
        <div class="overflow-hidden flex-1">
          <p class="text-xs text-gray-600 truncate">
            <span class="font-medium text-gray-900">{{ ticker.name }}</span>
            {{ ticker.text }}
            <span class="font-bold text-green-600">{{ ticker.amount }}</span>
          </p>
        </div>
      </div>

      <!-- Grid (PC) / List (H5) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
        <ProjectCard
          v-for="project in store.filteredProjects"
          :key="project.id"
          :project="project"
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

const h5Filters = ['启动资金', '时间投入', '技术门槛']
const activeH5Filter = ref('启动资金')

const ticker = {
  name: '张丽丽',
  text: ' 在AI红书爆款文案项目中赚了',
  amount: '¥50,000'
}
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
</style>

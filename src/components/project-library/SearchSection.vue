<template>
  <section class="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-6 md:py-16 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 md:px-6 relative z-10">

      <!-- Title -->
      <h1 class="text-xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-4 md:mb-8 leading-tight">
        200+经过市场验证的AI创业项目模板
      </h1>

      <!-- Search Box -->
      <div class="max-w-3xl mx-auto bg-white rounded-xl md:rounded-2xl shadow-lg p-3 md:p-6 mb-3 md:mb-6">

        <!-- Search Type Radio -->
        <div class="flex items-center gap-4 mb-4">
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="searchType" value="quick" checked class="w-4 h-4 text-blue-600" />
            <span class="text-sm font-medium text-gray-900">快速搜索</span>
          </label>
        </div>

        <!-- Search Input -->
        <div class="flex gap-2 md:gap-3 mb-3 md:mb-4">
          <div class="flex-1 relative">
            <svg class="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="请输入关键词，快速找到适合你的项目"
              class="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-2.5 md:py-3 border border-gray-200 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              @input="$emit('search', searchQuery)"
            />
          </div>
          <button
            class="px-4 md:px-8 py-2.5 md:py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg md:rounded-xl transition-colors whitespace-nowrap text-sm"
            @click="$emit('search', searchQuery)"
          >
            开始创作
          </button>
        </div>

        <!-- Hot Tags -->
        <div class="flex items-center gap-1.5 md:gap-2 text-sm flex-wrap">
          <span class="text-gray-500 text-xs">热门：</span>
          <button
            class="px-2.5 md:px-3 py-1 rounded-md text-xs font-medium transition-colors bg-blue-50 text-blue-600 hover:bg-blue-100"
            @click="$emit('tag-click', 'AI写作')"
          >
            AI写作
          </button>
          <button
            class="px-2.5 md:px-3 py-1 rounded-md text-xs font-medium transition-colors bg-orange-50 text-orange-600 hover:bg-orange-100"
            @click="$emit('tag-click', '自媒体')"
          >
            自媒体
          </button>
          <button
            class="px-2.5 md:px-3 py-1 rounded-md text-xs font-medium transition-colors bg-pink-50 text-pink-600 hover:bg-pink-100"
            @click="$emit('tag-click', '电商项目')"
          >
            电商项目
          </button>
          <button
            class="px-2.5 md:px-3 py-1 rounded-md text-xs font-medium transition-colors bg-green-50 text-green-600 hover:bg-green-100"
            @click="$emit('tag-click', '知识付费')"
          >
            知识付费
          </button>
        </div>
      </div>

      <!-- Quick Filters -->
      <div class="flex justify-start md:justify-center gap-2 md:gap-3 overflow-x-auto scrollbar-hide pb-2 -mx-2 px-2">
        <button
          v-for="filter in quickFilters"
          :key="filter.label"
          class="px-3 md:px-6 py-1.5 md:py-2 bg-white rounded-full text-xs md:text-sm font-medium text-gray-700 hover:shadow-md transition-all whitespace-nowrap flex-shrink-0"
          @click="$emit('quick-filter', filter.value)"
        >
          {{ filter.label }}
        </button>
      </div>

    </div>

    <!-- Decorative Icons - Hidden on mobile -->
    <div class="hidden md:block absolute right-20 top-20 w-16 h-16 bg-blue-200 rounded-2xl opacity-50 transform rotate-12"></div>
    <div class="hidden md:block absolute right-40 bottom-20 w-12 h-12 bg-green-200 rounded-xl opacity-50"></div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Props & Emits
defineEmits<{
  search: [query: string]
  'tag-click': [tag: string]
  'quick-filter': [filter: string]
}>()

// Data
const searchQuery = ref('')

const quickFilters = [
  { label: '💰 低于1000元', value: 'low-cost' },
  { label: '🕐 副业/程序时间', value: 'part-time' },
  { label: '✅ 无代码', value: 'no-code' }
]
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
</style>

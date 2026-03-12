<template>
  <div>
    <AppHeader />
    <main class="pt-16 min-h-screen bg-gray-50">

      <!-- Hero Section -->
      <section class="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8 md:py-16 relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 md:px-6 text-center relative z-10">

          <!-- Greeting -->
          <h1 class="text-2xl md:text-5xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
            你好，[用户昵称]，今天我们创造什么？
          </h1>

          <!-- Action Buttons -->
          <div class="flex flex-col md:flex-row justify-center gap-3 md:gap-4 mb-8 md:mb-12">
            <button class="px-6 md:px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-xl transition-colors text-sm md:text-base">
              +从项目模板库导入
            </button>
            <button class="px-6 md:px-8 py-3 bg-white hover:bg-gray-50 text-gray-900 font-medium rounded-xl border border-gray-300 transition-colors text-sm md:text-base">
              创建我的新项目
            </button>
          </div>

        </div>

        <!-- Decorative Icons - Hidden on mobile -->
        <div class="hidden md:block absolute right-20 top-20 w-16 h-16 bg-blue-200 rounded-2xl opacity-50 transform rotate-12"></div>
        <div class="hidden md:block absolute right-40 bottom-20 w-12 h-12 bg-green-200 rounded-xl opacity-50"></div>
      </section>

      <!-- My Projects Section -->
      <section class="py-6 md:py-12">
        <div class="max-w-7xl mx-auto px-4 md:px-6">

          <!-- Title -->
          <h2 class="text-xl md:text-3xl font-bold text-gray-900 text-center mb-4 md:mb-8">我的所有项目</h2>

          <!-- Search and Filters -->
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0 mb-4 md:mb-8">
            <div class="flex-1 md:max-w-md flex gap-2 md:gap-3">
              <input
                type="text"
                placeholder="输入关键词，快速找到你的项目"
                class="flex-1 px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <button class="px-4 md:px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-sm whitespace-nowrap">
                🔍 寻找
              </button>
            </div>

            <!-- Filter Tabs - Horizontal scroll on mobile -->
            <div class="flex gap-2 overflow-x-auto scrollbar-hide -mx-2 px-2 pb-2 md:pb-0">
              <button class="px-3 md:px-4 py-2 bg-gray-900 text-white text-xs md:text-sm font-medium rounded-lg flex-shrink-0">全部</button>
              <button class="px-3 md:px-4 py-2 bg-white text-gray-700 text-xs md:text-sm font-medium rounded-lg hover:bg-gray-100 flex-shrink-0">进行中</button>
              <button class="px-3 md:px-4 py-2 bg-white text-gray-700 text-xs md:text-sm font-medium rounded-lg hover:bg-gray-100 flex-shrink-0">已公开</button>
              <button class="px-3 md:px-4 py-2 bg-white text-gray-700 text-xs md:text-sm font-medium rounded-lg hover:bg-gray-100 flex-shrink-0">已完成</button>
            </div>
          </div>

          <!-- Project Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div v-for="i in 9" :key="i" class="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 hover:shadow-lg transition-all relative border-2 border-gray-200">
              <span class="absolute top-3 right-3 md:top-4 md:right-4 px-2 md:px-3 py-0.5 md:py-1 bg-gray-900 text-white text-[10px] md:text-xs font-medium rounded">私密</span>

              <div class="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-base md:text-lg font-bold text-gray-900 mb-1 md:mb-2">AI智能客服SaaS系统</h3>
                  <p class="text-xs md:text-sm text-gray-600 line-clamp-2">利用AI自动生成/让中型餐饮文案，帮助餐主快速落地营销宣传，月入可达5k~2w</p>
                </div>
              </div>

              <div class="mb-3 md:mb-4">
                <div class="flex items-center justify-between text-xs md:text-sm text-gray-500 mb-2">
                  <span>任务进度：58%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-1.5 md:h-2">
                  <div class="bg-blue-600 h-1.5 md:h-2 rounded-full" style="width: 58%"></div>
                </div>
              </div>

              <div class="flex items-center justify-between text-xs md:text-sm text-gray-400">
                <div class="flex items-center gap-1">
                  <svg class="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>更新于2小时</span>
                </div>
                <button class="text-gray-400 hover:text-gray-600">
                  <svg class="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/common/AppHeader.vue'
import AppFooter from '@/components/common/AppFooter.vue'
</script>

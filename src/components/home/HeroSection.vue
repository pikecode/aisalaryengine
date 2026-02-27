<template>
  <!-- PC: dark gradient, H5: light gradient -->
  <section class="relative flex items-center overflow-hidden pt-14 md:pt-16
    bg-gradient-to-b from-blue-50 to-white
    md:bg-none md:bg-hero-gradient">

    <!-- PC background decoration -->
    <div class="hidden md:block absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16 w-full">
      <div class="max-w-3xl mx-auto text-center">

        <!-- Badge -->
        <div class="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm mb-4
          bg-blue-100 text-blue-600
          md:bg-white/10 md:backdrop-blur-sm md:border md:border-white/20 md:text-white/90">
          <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          无论是创业还是副业，我们帮你迈出第一步
        </div>

        <!-- Title -->
        <h1 class="text-3xl md:text-6xl font-bold mb-4 leading-tight
          text-gray-900 md:text-white">
          AI薪引擎
          <span class="block text-blue-600 md:text-blue-200">抓住AI风口</span>
        </h1>

        <p class="text-base md:text-xl mb-8 max-w-xl mx-auto
          text-gray-500 md:text-white/70">
          精选200+验证可行的AI创业项目，手把手带你从0到1，实现副业变现
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <button class="font-semibold px-8 py-3.5 rounded-xl transition-all text-base
            bg-gray-900 text-white hover:bg-gray-800
            md:bg-white md:text-blue-600 md:hover:bg-blue-50 md:shadow-lg">
            成为签约创客
          </button>
          <button class="font-semibold px-8 py-3.5 rounded-xl transition-all text-base
            bg-white text-gray-800 border border-gray-200 hover:bg-gray-50
            md:bg-white/10 md:backdrop-blur-sm md:border-white/30 md:text-white md:hover:bg-white/20">
            创造我的项目
          </button>
        </div>

        <!-- Search Card (H5 style) -->
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-4 text-left
          md:bg-white/10 md:backdrop-blur-sm md:border-white/20 md:shadow-none">
          <div class="text-xs font-medium text-gray-400 mb-2 md:hidden">快速搜索</div>
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 flex-shrink-0 text-gray-400 md:text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="搜索AI创业项目、副业方向..."
              class="flex-1 bg-transparent outline-none text-sm
                text-gray-700 placeholder-gray-400
                md:text-white md:placeholder-white/50"
            />
            <button class="font-semibold px-4 py-1.5 rounded-xl text-sm flex-shrink-0 transition-colors
              bg-indigo-600 text-white hover:bg-indigo-700
              md:bg-white md:text-blue-600 md:hover:bg-blue-50">
              <span class="md:hidden">开始创作</span>
              <span class="hidden md:inline">搜索</span>
            </button>
          </div>
        </div>

        <!-- H5 Filter Pills -->
        <div class="flex gap-2 justify-center mb-6 md:hidden">
          <button v-for="pill in filterPills" :key="pill"
            class="text-xs px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm">
            {{ pill }}
          </button>
        </div>

        <!-- Hot Tags (PC only) -->
        <div class="hidden md:flex flex-wrap gap-2 justify-center">
          <span class="text-white/50 text-sm">热门：</span>
          <button
            v-for="tag in hotTags"
            :key="tag"
            class="text-sm text-white/70 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-all"
          >
            {{ tag }}
          </button>
        </div>

        <!-- Stats row (H5 only, shown below hero) -->
        <div class="grid grid-cols-3 gap-2 mt-6 md:hidden">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="text-xl font-bold text-blue-600">{{ stat.value }}</div>
            <div class="text-xs text-gray-500 mt-0.5">{{ stat.label }}</div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const searchQuery = ref('')
const hotTags = ['小红书运营', 'AI写作', '知识付费', '私域流量', '短视频', '电商选品']
const filterPills = ['低于1000元', '副业/碎片时间', '无代码']
const stats = [
  { value: '200+', label: '验证创业脚本' },
  { value: '5000+', label: '早期创客' },
  { value: '100+', label: '实战案例' }
]
</script>

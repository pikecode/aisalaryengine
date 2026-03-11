<template>
  <section class="relative overflow-hidden pt-20 pb-12 bg-white">
    <div class="relative max-w-7xl mx-auto px-4 md:px-6 w-full">
      <div class="max-w-5xl mx-auto text-center">

        <!-- Title -->
        <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
          AI薪引擎-抓住AI风口
        </h1>

        <p class="text-base md:text-xl mb-10 text-gray-600">
          无论是创业还是副业，我们帮你迈出第一步。
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button class="font-semibold w-[168px] h-[38px] rounded-full transition-all text-sm bg-gray-900 text-white hover:bg-gray-800 shadow-lg">
            成为签约创客
          </button>
          <button class="font-semibold w-[168px] h-[38px] rounded-full transition-all text-sm bg-white text-gray-800 border-2 border-gray-300 hover:bg-gray-50">
            创造我的项目
          </button>
        </div>

        <!-- Three Overlapping Circle Cards with Images -->
        <div class="relative h-80 md:h-96 mb-8">
          <!-- Left Circle -->
          <div class="absolute left-[5%] md:left-[15%] top-8 w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl z-10 border-4 border-blue-500">
            <div class="relative w-full h-full bg-gradient-to-br from-blue-900 to-indigo-900">
              <div class="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                <div class="text-4xl md:text-5xl font-bold mb-2">200+</div>
                <div class="text-sm md:text-base">经过验证的创业副本</div>
              </div>
              <!-- Decorative elements -->
              <div class="absolute inset-0 opacity-30">
                <div class="absolute top-1/4 left-1/4 w-20 h-20 bg-blue-400 rounded-lg blur-xl"></div>
              </div>
            </div>
          </div>

          <!-- Center Circle (Largest) -->
          <div class="absolute left-1/2 -translate-x-1/2 top-0 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl z-20 border-4 border-purple-500">
            <div class="relative w-full h-full bg-gradient-to-br from-purple-900 via-pink-800 to-purple-900">
              <div class="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                <div class="text-5xl md:text-6xl font-bold mb-2">5000+</div>
                <div class="text-sm md:text-base">早期创客已加入</div>
              </div>
              <!-- AI Hand illustration placeholder -->
              <div class="absolute inset-0 flex items-center justify-center opacity-40">
                <div class="text-8xl">🤖</div>
              </div>
            </div>
          </div>

          <!-- Right Circle -->
          <div class="absolute right-[5%] md:right-[15%] top-8 w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl z-10 border-4 border-cyan-500">
            <div class="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900">
              <div class="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                <div class="text-4xl md:text-5xl font-bold mb-2">200+</div>
                <div class="text-sm md:text-base">社区分享实践案例</div>
              </div>
              <!-- Decorative elements -->
              <div class="absolute inset-0 opacity-20">
                <div class="absolute top-1/3 right-1/4 w-24 h-24 bg-cyan-400 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>

          <!-- Down Arrow Button -->
          <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors z-30 shadow-xl border-2 border-yellow-400">
            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <!-- Search Box -->
        <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-lg border border-gray-200 p-8 max-w-4xl mx-auto">
          <div class="flex items-center gap-3 mb-6">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="请输入关键词，快速找到适合你的项目"
              class="flex-1 bg-white rounded-2xl px-6 py-4 outline-none text-base border-0 shadow-sm"
            />
            <button class="font-semibold px-10 py-4 rounded-2xl text-base bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-md flex items-center gap-2 whitespace-nowrap">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              寻找项目
            </button>
          </div>
          <div class="flex gap-3 flex-wrap">
            <button v-for="pill in filterPills" :key="pill"
              class="text-sm px-5 py-2.5 rounded-xl bg-white border-2 border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-400 hover:text-blue-600 transition-all">
              {{ pill }}
            </button>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const searchQuery = ref('')
const filterPills = ['低于1000元', '副业/碎片时间', '无代码']
</script>

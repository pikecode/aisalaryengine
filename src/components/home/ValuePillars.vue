<template>
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 md:px-6">

      <!-- Title -->
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-900">四大价值支柱</h2>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="pillar in pillars"
          :key="pillar.title"
          class="relative bg-white rounded-2xl p-6 aspect-square group cursor-pointer hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
          <!-- Icon -->
          <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="pillar.icon" />
            </svg>
          </div>

          <!-- Content -->
          <div class="mb-4">
            <h3 class="text-lg font-bold text-gray-900 mb-3">{{ pillar.title }}</h3>
            <p class="text-sm text-gray-600 leading-relaxed">{{ pillar.desc }}</p>
          </div>

          <!-- Arrow Button -->
          <div class="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center transition-all group-hover:bg-blue-700 group-hover:scale-110">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const pillars = [
  {
    title: '项目模版库',
    desc: '200+经过验证的创业副本，涵盖AI写作、电商、自媒体等多个领域',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
  },
  {
    title: 'AI工作台',
    desc: '智能化项目生成工具，帮助你快速启动创业项目',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z'
  },
  {
    title: 'Pro社区',
    desc: '与5000+创客交流经验，获取一手创业资讯和实战技巧',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  },
  {
    title: '用户共创与交易',
    desc: '发布你的项目到创客市场，平台担保交易，坐享收益',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  }
]
</script>

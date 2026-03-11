<template>
  <section class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 md:px-6">

      <!-- Title -->
      <div class="text-center mb-10">
        <h2 class="text-3xl font-bold text-gray-900">四大价值支柱</h2>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div
          v-for="pillar in pillars"
          :key="pillar.title"
          class="relative rounded-2xl overflow-hidden aspect-square group cursor-pointer"
        >
          <!-- Background (using gradient as placeholder for images) -->
          <div
            class="absolute inset-0 bg-gradient-to-br transition-transform group-hover:scale-110 duration-500"
            :class="pillar.gradient"
          ></div>

          <!-- Dark Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

          <!-- Content -->
          <div class="relative h-full p-5 flex flex-col justify-end text-white">
            <h3 class="text-lg font-bold mb-1.5">{{ pillar.title }}</h3>
            <p class="text-xs text-white/80 leading-relaxed">{{ pillar.desc }}</p>
          </div>

          <!-- Arrow Button -->
          <div class="absolute bottom-5 right-5 w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center transition-all group-hover:bg-blue-500 group-hover:scale-110">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    desc: '200+验证过的AI项目模版，涵盖多个领域',
    gradient: 'from-indigo-900 to-purple-900'
  },
  {
    title: 'AI工作台',
    desc: '无需复杂编辑，通过可视化界面快速创建',
    gradient: 'from-slate-800 to-slate-900'
  },
  {
    title: 'Pro社区',
    desc: '连接AI创业者，投资人与技术专家',
    gradient: 'from-blue-900 to-indigo-900'
  },
  {
    title: '用户共创与交易',
    desc: '连接AI创业者，投资人与技术专家，分享经验',
    gradient: 'from-teal-900 to-cyan-900'
  }
]
</script>

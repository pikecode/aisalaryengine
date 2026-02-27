<template>
  <section class="py-12 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <div class="text-center mb-8">
        <h2 class="section-title">加入他们的成功之旅</h2>
        <p class="section-subtitle">真实创客，真实收益</p>
      </div>

      <!-- Mobile: horizontal scroll, PC: grid -->
      <div class="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto pb-2 md:overflow-visible scrollbar-hide">
        <div
          v-for="story in stories"
          :key="story.id"
          class="card p-5 flex-shrink-0 w-72 md:w-auto hover:shadow-md transition-all"
        >
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              {{ story.username[0] }}
            </div>
            <div>
              <div class="font-semibold text-gray-900 text-sm">{{ story.username }}</div>
              <div class="text-xs text-gray-500">{{ story.role }}</div>
            </div>
            <div class="ml-auto text-green-600 font-bold text-sm">{{ story.revenue }}</div>
          </div>

          <!-- Mock chart/screenshot area -->
          <div class="h-28 bg-gradient-to-br rounded-xl mb-3 flex items-center justify-center"
            :class="story.gradientClass">
            <div class="text-center">
              <div class="text-2xl font-bold text-white">{{ story.revenue }}</div>
              <div class="text-white/70 text-xs mt-1">月收益</div>
            </div>
          </div>

          <p class="text-xs text-gray-500 leading-relaxed">{{ story.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stories = [
  {
    id: '1',
    username: '张小明',
    role: 'AI内容创作者',
    revenue: '¥12,800',
    description: '通过AI红书文案工具，3个月从0粉丝做到10万粉，月收入稳定破万。',
    gradientClass: 'from-blue-500 to-indigo-600'
  },
  {
    id: '2',
    username: '李晓雯',
    role: '知识付费创业者',
    revenue: '¥28,500',
    description: '利用AI工作坊的课程模板，快速搭建知识付费体系，首月变现超2万。',
    gradientClass: 'from-purple-500 to-pink-600'
  },
  {
    id: '3',
    username: '王大力',
    role: '电商运营',
    revenue: '¥45,000',
    description: 'AI选品分析工具帮我精准找到爆款，店铺GMV翻了3倍，月利润4.5万。',
    gradientClass: 'from-green-500 to-teal-600'
  }
]
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
</style>

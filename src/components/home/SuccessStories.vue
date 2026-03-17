<template>
  <section class="py-8 md:py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 md:px-6">

      <!-- Title -->
      <div class="text-center mb-6 md:mb-12">
        <h2 class="text-2xl md:text-4xl font-bold text-gray-900">加入他们的成功之旅</h2>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-4 mb-6">
        <div
          v-for="story in stories"
          :key="story.id"
          class="bg-white rounded-2xl p-4 sm:p-4 shadow-sm hover:shadow-md transition-all cursor-pointer"
        >
          <!-- Stats -->
          <div class="grid grid-cols-3 gap-2 mb-4">
            <div v-for="stat in story.stats" :key="stat.label" class="text-center">
              <div class="text-xs sm:text-[10px] md:text-xs text-gray-500 mb-1 truncate">{{ stat.label }}</div>
              <div class="text-base sm:text-sm md:text-lg font-bold text-gray-900">{{ stat.value }}</div>
              <div class="text-xs sm:text-[10px] md:text-xs" :class="stat.change.startsWith('+') ? 'text-red-500' : 'text-green-500'">
                {{ stat.change }}
              </div>
            </div>
          </div>

          <!-- Chart Area -->
          <div class="h-28 sm:h-24 md:h-32 bg-gray-50 rounded-xl mb-4 flex items-end justify-around px-3 md:px-4 pb-3 md:pb-4 gap-1">
            <div v-if="story.chartData === 'bar'" class="flex items-end gap-1 w-full">
              <div v-for="i in 12" :key="i" class="flex-1 bg-blue-400 rounded-t" :style="{ height: Math.random() * 60 + 20 + 'px' }"></div>
            </div>
            <svg v-else-if="story.chartData === 'line'" class="w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
              <polyline points="0,80 20,60 40,70 60,40 80,50 100,30 120,45 140,25 160,35 180,20 200,30" fill="none" stroke="#3b82f6" stroke-width="2" />
            </svg>
            <div v-else-if="story.chartData === 'gauge'" class="w-full h-full flex items-center justify-center">
              <div class="relative w-16 h-16 sm:w-14 sm:h-14 md:w-24 md:h-24">
                <svg class="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" stroke-width="8" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#3b82f6" stroke-width="8" stroke-dasharray="251" stroke-dashoffset="63" />
                </svg>
                <div class="absolute inset-0 flex items-center justify-center text-sm sm:text-xs md:text-sm font-bold text-gray-900">75%</div>
              </div>
            </div>
          </div>

          <!-- User Info -->
          <div class="flex items-center gap-2 mb-3">
            <div class="w-7 h-7 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full overflow-hidden flex-shrink-0">
              <div
                class="w-full h-full flex items-center justify-center text-white text-sm sm:text-xs md:text-sm font-bold"
                :class="story.avatarColor"
              >
                {{ story.name[0] }}
              </div>
            </div>
            <div class="flex-1 min-w-0">
              <div class="text-sm sm:text-xs md:text-sm font-semibold text-gray-900 truncate">{{ story.name }}</div>
              <div class="text-xs sm:text-[10px] md:text-xs text-gray-500 truncate">{{ story.role }}</div>
            </div>
          </div>

          <!-- Tag -->
          <div class="inline-block px-2 md:px-3 py-1 bg-gray-100 rounded-lg text-xs sm:text-[10px] md:text-xs text-gray-600 mb-2">
            {{ story.category }}
          </div>

          <!-- Description -->
          <p class="text-sm sm:text-xs md:text-sm text-gray-600 leading-relaxed line-clamp-2">
            {{ story.description }}
          </p>
        </div>
      </div>

      <!-- Load More -->
      <div class="text-center mt-6 md:mt-8">
        <button class="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm md:text-base">
          加载更多...
        </button>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const stories = [
  {
    id: 1,
    name: '周晓晓成长史',
    role: '来自广西一线城',
    avatarColor: 'bg-blue-500',
    category: '网店收益',
    stats: [
      { label: '成交金额', value: '¥14.7万', change: '+163%' },
      { label: '成交金额环比', value: '28.22%', change: '+8.02%' },
      { label: '支付金额...', value: '¥3.9万', change: '+99.75%' }
    ],
    chartData: 'line',
    description: '用了这个工具，我节省了80%的时间...'
  },
  {
    id: 2,
    name: '周晓晓成长史',
    role: '来自广西一线城',
    avatarColor: 'bg-orange-500',
    category: '网店收益',
    stats: [
      { label: '成交金额', value: '¥3.8万', change: '+100%' },
      { label: '成交人数', value: '443', change: '+85.98%' },
      { label: '成交金额...', value: '¥10.8万', change: '+77%' }
    ],
    chartData: 'bar',
    description: '用了这个工具，我节省了80%的时间...'
  },
  {
    id: 3,
    name: '周晓晓成长史',
    role: '来自广西一线城',
    avatarColor: 'bg-green-500',
    category: '网店收益',
    stats: [
      { label: '成交金额', value: '¥10.8万', change: '+100%' },
      { label: '成交人数', value: '443', change: '+85.98%' },
      { label: '成交金额...', value: '¥532.1B', change: '+85.98%' }
    ],
    chartData: 'line',
    description: '用了这个工具，我节省了80%的时间...'
  },
  {
    id: 4,
    name: '周晓晓成长史',
    role: '来自广西一线城',
    avatarColor: 'bg-purple-500',
    category: '网店收益',
    stats: [
      { label: '成交金额', value: '¥14.7万', change: '+163%' },
      { label: '成交金额环比', value: '28.22%', change: '+8.02%' },
      { label: '支付金额...', value: '¥3.9万', change: '+99.75%' }
    ],
    chartData: 'gauge',
    description: '用了这个工具，我节省了80%的时间...'
  },
  {
    id: 5,
    name: '周晓晓成长史',
    role: '来自广西一线城',
    avatarColor: 'bg-pink-500',
    category: '网店收益',
    stats: [
      { label: '成交金额', value: '¥10.8万', change: '+100%' },
      { label: '成交人数', value: '443', change: '+85.98%' },
      { label: '成交金额...', value: '¥532.1B', change: '+85.98%' }
    ],
    chartData: 'line',
    description: '用了这个工具，我节省了80%的时间...'
  },
  {
    id: 6,
    name: '张丽丽',
    role: '来自北京',
    avatarColor: 'bg-indigo-500',
    category: '网店收益',
    stats: [
      { label: '支付金额', value: '2.30%', change: '+1.44%' },
      { label: '成交人数', value: '17.1k', change: '+28.7%' },
      { label: '成交金额', value: '¥100.3万', change: '+43.2%' }
    ],
    chartData: 'bar',
    description: '用了这个工具，我节省了80%的时间...'
  },
  {
    id: 7,
    name: '李明',
    role: '来自上海',
    avatarColor: 'bg-red-500',
    category: '网店收益',
    stats: [
      { label: '核心指标', value: '1,620', change: '+234%' },
      { label: '支付订单数', value: '27', change: '+3.5%' },
      { label: '订单数', value: '289', change: '+1.8%' }
    ],
    chartData: 'gauge',
    description: '用了这个工具，我节省了80%的时间...'
  },
  {
    id: 8,
    name: '王芳',
    role: '来自深圳',
    avatarColor: 'bg-teal-500',
    category: '网店收益',
    stats: [
      { label: '支付金额', value: '¥30.9万', change: '+52.3%' },
      { label: '支付订单数', value: '113', change: '+89.2%' },
      { label: '商品访问量', value: '1,620', change: '+234%' }
    ],
    chartData: 'line',
    description: '用了这个工具，我节省了80%的时间...'
  },
  {
    id: 9,
    name: '刘洋',
    role: '来自杭州',
    avatarColor: 'bg-cyan-500',
    category: '网店收益',
    stats: [
      { label: '访问人数', value: '346', change: '+18.7%' },
      { label: '月环比', value: '-', change: '+3.22' },
      { label: '浏览商品数', value: '41', change: '-89.3%' }
    ],
    chartData: 'bar',
    description: '用了这个工具，我节省了80%的时间...'
  },
  {
    id: 10,
    name: '陈静',
    role: '来自成都',
    avatarColor: 'bg-yellow-500',
    category: '网店收益',
    stats: [
      { label: '增长率', value: '7.59t', change: '+94.07' },
      { label: '访问量', value: '72', change: '+2.8%' },
      { label: '转化率', value: '6.98%', change: '+129' }
    ],
    chartData: 'line',
    description: '用了这个工具，我节省了80%的时间...'
  }
]
</script>

<template>
  <!-- Desktop Sidebar -->
  <aside class="hidden md:block w-64 flex-shrink-0">
    <div class="bg-white rounded-2xl p-6 sticky top-20">

      <!-- 市场阶段 -->
      <div class="mb-6">
        <h3 class="text-sm font-semibold text-gray-900 mb-3">市场阶段</h3>
        <div class="space-y-2 text-sm">
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" class="rounded" v-model="filters.marketStage" value="blue-ocean" />
            <span class="text-gray-700">蓝海/热先机</span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" class="rounded" v-model="filters.marketStage" value="red-ocean" />
            <span class="text-gray-700">红海/拼执行</span>
          </label>
        </div>
      </div>

      <!-- 变现周期 -->
      <div class="mb-6">
        <h3 class="text-sm font-semibold text-gray-900 mb-3">变现周期</h3>
        <div class="space-y-2 text-sm">
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" class="rounded" v-model="filters.monetizationCycle" value="short" />
            <span class="text-gray-700">短期/快钱</span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" class="rounded" v-model="filters.monetizationCycle" value="medium" />
            <span class="text-gray-700">中期/积累</span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" class="rounded" v-model="filters.monetizationCycle" value="long" />
            <span class="text-gray-700">长期/复利</span>
          </label>
        </div>
      </div>

      <!-- 启动资金 -->
      <div class="mb-6">
        <h3 class="text-sm font-semibold text-gray-900 mb-3">启动资金</h3>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="cost in costOptions"
            :key="cost.value"
            @click="toggleFilter('startupCost', cost.value)"
            :class="[
              'px-3 py-1.5 text-sm rounded-lg transition-colors',
              filters.startupCost.includes(cost.value)
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            {{ cost.label }}
          </button>
        </div>
      </div>

      <!-- 技术要求 -->
      <div class="mb-6">
        <h3 class="text-sm font-semibold text-gray-900 mb-3">技术要求</h3>
        <div class="space-y-2 text-sm">
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" class="rounded" v-model="filters.techRequirement" value="no-code" />
            <span class="text-gray-700">无代码要求</span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" class="rounded" v-model="filters.techRequirement" value="tools" />
            <span class="text-gray-700">工具熟/组合</span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" class="rounded" v-model="filters.techRequirement" value="coding" />
            <span class="text-gray-700">需编程/开发</span>
          </label>
        </div>
      </div>

      <!-- 行业分类 -->
      <div class="mb-6">
        <h3 class="text-sm font-semibold text-gray-900 mb-3">行业分类</h3>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="industry in industryOptions"
            :key="industry.value"
            @click="toggleFilter('industry', industry.value)"
            :class="[
              'px-3 py-1.5 text-sm rounded-lg transition-colors',
              filters.industry.includes(industry.value)
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            {{ industry.label }}
          </button>
        </div>
      </div>

      <!-- 投入模式 -->
      <div>
        <h3 class="text-sm font-semibold text-gray-900 mb-3">投入模式</h3>
        <div class="space-y-2 text-sm">
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" class="rounded" v-model="filters.workMode" value="auto" />
            <span class="text-gray-700">全自动/兼职</span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" class="rounded" v-model="filters.workMode" value="part-time" />
            <span class="text-gray-700">程序时间/副业</span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" class="rounded" v-model="filters.workMode" value="full-time" />
            <span class="text-gray-700">需店铺/资质</span>
          </label>
        </div>
      </div>

    </div>
  </aside>

  <!-- Mobile Filter Button -->
  <button
    class="md:hidden fixed bottom-6 right-6 z-40 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center"
    @click="$emit('open-mobile-filter')"
  >
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
    </svg>
  </button>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'

// Emits
const emit = defineEmits<{
  'filter-change': [filters: FilterState]
  'open-mobile-filter': []
}>()

// Types
interface FilterState {
  marketStage: string[]
  monetizationCycle: string[]
  startupCost: string[]
  techRequirement: string[]
  industry: string[]
  workMode: string[]
}

// Data
const filters = reactive<FilterState>({
  marketStage: [],
  monetizationCycle: [],
  startupCost: ['zero'],
  techRequirement: [],
  industry: ['media'],
  workMode: []
})

const costOptions = [
  { label: '0成本', value: 'zero' },
  { label: '千元级', value: 'thousand' },
  { label: '万元级', value: 'ten-thousand' },
  { label: '百万级+', value: 'million' }
]

const industryOptions = [
  { label: '自媒体创', value: 'media' },
  { label: '电商/线下', value: 'ecommerce' },
  { label: '内容创作', value: 'content' },
  { label: '教育培训', value: 'education' },
  { label: '效率提升', value: 'productivity' },
  { label: '开发工具', value: 'dev-tools' }
]

// Methods
const toggleFilter = (key: keyof FilterState, value: string) => {
  const filterArray = filters[key] as string[]
  const index = filterArray.indexOf(value)
  if (index > -1) {
    filterArray.splice(index, 1)
  } else {
    filterArray.push(value)
  }
}

// Watch filters and emit changes
watch(filters, () => {
  emit('filter-change', filters)
}, { deep: true })
</script>

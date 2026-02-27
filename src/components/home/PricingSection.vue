<template>
  <section class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <div class="text-center mb-8">
        <h2 class="section-title">定价套餐方案</h2>
        <p class="section-subtitle">选择适合你的计划，开启AI创业之旅</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div
          v-for="plan in plans"
          :key="plan.id"
          class="card p-6 relative flex flex-col"
          :class="plan.isPopular ? 'ring-2 ring-blue-500 shadow-lg shadow-blue-100' : ''"
        >
          <!-- Popular badge -->
          <div v-if="plan.isPopular" class="absolute -top-3 left-1/2 -translate-x-1/2">
            <span class="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">最受欢迎</span>
          </div>

          <div class="mb-6">
            <h3 class="font-bold text-gray-900 text-lg mb-1">{{ plan.name }}</h3>
            <div class="flex items-end gap-1 mt-3">
              <span class="text-4xl font-bold" :class="plan.isPopular ? 'text-blue-600' : 'text-gray-900'">
                ¥{{ plan.price }}
              </span>
              <span class="text-gray-400 text-sm mb-1">{{ plan.period }}</span>
            </div>
            <div v-if="plan.originalPrice" class="flex items-center gap-2 mt-1">
              <span class="text-xs text-gray-400 line-through">年付¥{{ plan.originalPrice }}</span>
              <span class="text-xs bg-red-50 text-red-500 px-1.5 py-0.5 rounded font-medium">限时优惠</span>
            </div>
          </div>

          <ul class="space-y-3 flex-1 mb-6">
            <li
              v-for="feature in plan.features"
              :key="feature"
              class="flex items-start gap-2 text-sm text-gray-600"
            >
              <svg class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              {{ feature }}
            </li>
          </ul>

          <button
            class="w-full py-3 rounded-xl font-semibold text-sm transition-all"
            :class="plan.isPopular
              ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'"
          >
            {{ plan.ctaText }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { PricingPlan } from '@/types'

const plans: PricingPlan[] = [
  {
    id: 'free',
    name: '免费版',
    price: 0,
    period: '/永久',
    features: [
      '浏览10个创业项目',
      '基础社区访问',
      '每月3次AI工作台使用',
      '公开案例查看'
    ],
    ctaText: '免费开始',
    isPopular: false
  },
  {
    id: 'pro',
    name: 'Pro会员版',
    price: 99,
    originalPrice: 888,
    period: '/月',
    features: [
      '解锁全部200+项目',
      'AI工作台无限使用',
      'Pro社区专属频道',
      '每月新增项目优先体验',
      '1对1导师答疑（每月2次）'
    ],
    ctaText: '立即升级',
    isPopular: true
  },
  {
    id: 'lifetime',
    name: '终身会员',
    price: 99,
    originalPrice: 888,
    period: '/年付',
    features: [
      '包含Pro所有权益',
      '终身免费更新',
      '专属创客社群',
      '线下活动优先名额',
      '联合创始人徽章'
    ],
    ctaText: '一次买断',
    isPopular: false
  }
]
</script>

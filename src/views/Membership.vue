<template>
  <div>
    <AppHeader />
    <main class="pt-16 min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">

      <!-- Hero Section -->
      <section class="py-8 md:py-16">
        <div class="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 class="text-2xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">选择适合你的会员套餐</h1>
          <p class="text-sm md:text-lg text-gray-600 mb-6 md:mb-8">解锁AI创业的完整能力</p>

          <!-- Toggle -->
          <div class="inline-flex items-center gap-1 md:gap-2 bg-white rounded-full p-1 shadow-sm">
            <button class="px-4 md:px-6 py-2 bg-blue-600 text-white rounded-full font-medium text-sm md:text-base">月付</button>
            <button class="px-4 md:px-6 py-2 text-gray-600 rounded-full font-medium hover:bg-gray-100 text-sm md:text-base">年付(享优惠)</button>
          </div>
        </div>
      </section>

      <!-- Pricing Cards -->
      <section class="pb-8 md:pb-16">
        <div class="max-w-7xl mx-auto px-4 md:px-6">
          <PricingSection />
        </div>
      </section>

      <!-- Subscription History -->
      <section class="py-8 md:py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 md:px-6">
          <h2 class="text-xl md:text-3xl font-bold text-gray-900 text-center mb-6 md:mb-8">订阅与支付历史</h2>

          <!-- Mobile Card Layout -->
          <div class="md:hidden space-y-4">
            <div v-for="record in subscriptionHistory" :key="record.id" class="bg-gray-50 rounded-xl p-4">
              <div class="flex items-start justify-between mb-3">
                <div class="flex-1">
                  <h3 class="font-semibold text-gray-900 text-sm">{{ record.plan }}</h3>
                  <p class="text-lg font-bold text-blue-600 mt-1">{{ record.amount }}</p>
                </div>
                <span class="text-xs text-gray-500 bg-white px-2 py-1 rounded">{{ record.date }}</span>
              </div>
              <div class="pt-3 border-t border-gray-200">
                <a :href="record.receipt" class="text-blue-600 hover:underline text-xs">下载凭据</a>
              </div>
            </div>
          </div>

          <!-- Desktop Table Layout -->
          <div class="hidden md:block bg-gray-50 rounded-2xl overflow-hidden">
            <table class="w-full">
              <thead class="bg-white border-b border-gray-200">
                <tr>
                  <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">套餐名称</th>
                  <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">支付金额</th>
                  <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">支付时间</th>
                  <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">下载凭据</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr v-for="record in subscriptionHistory" :key="record.id" class="hover:bg-white transition-colors">
                  <td class="px-6 py-4 text-sm text-gray-900">{{ record.plan }}</td>
                  <td class="px-6 py-4 text-sm text-gray-900">{{ record.amount }}</td>
                  <td class="px-6 py-4 text-sm text-gray-600">{{ record.date }}</td>
                  <td class="px-6 py-4 text-sm"><a :href="record.receipt" class="text-blue-600 hover:underline">{{ record.receipt }}</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </main>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/common/AppHeader.vue'
import PricingSection from '@/components/home/PricingSection.vue'

// 订阅历史数据
const subscriptionHistory = [
  {
    id: 1,
    plan: 'Promax终身会员',
    amount: '¥2688',
    date: '2026-01-12 19:25:36',
    receipt: 'https://xinyinqin.com'
  },
  {
    id: 2,
    plan: 'Promax终身会员',
    amount: '¥299',
    date: '2025-12-12 19:25:36',
    receipt: 'https://xinyinqin.com'
  },
  {
    id: 3,
    plan: 'Promax终身会员',
    amount: '¥299',
    date: '2025-11-12 19:25:36',
    receipt: 'https://xinyinqin.com'
  },
  {
    id: 4,
    plan: 'Pro终身会员',
    amount: '¥99',
    date: '2025-10-12 19:25:36',
    receipt: 'https://xinyinqin.com'
  },
  {
    id: 5,
    plan: 'Pro终身会员',
    amount: '¥99',
    date: '2025-09-12 19:25:36',
    receipt: 'https://xinyinqin.com'
  }
]
</script>
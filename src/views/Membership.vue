<template>
  <div>
    <AppHeader />
    <main class="pt-16 min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">

      <!-- Hero Section -->
      <section class="py-16">
        <div class="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">选择适合你的会员套餐</h1>
          <p class="text-lg text-gray-600 mb-8">解锁AI创业的完整能力</p>

          <!-- Toggle -->
          <div class="inline-flex items-center gap-2 bg-white rounded-full p-1 shadow-sm">
            <button class="px-6 py-2 bg-blue-600 text-white rounded-full font-medium">月付</button>
            <button class="px-6 py-2 text-gray-600 rounded-full font-medium hover:bg-gray-100">年付(享优惠)</button>
          </div>
        </div>
      </section>

      <!-- Pricing Cards -->
      <section class="pb-16">
        <div class="max-w-7xl mx-auto px-4 md:px-6">
          <PricingSection />
        </div>
      </section>

      <!-- Subscription History -->
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 md:px-6">
          <h2 class="text-3xl font-bold text-gray-900 text-center mb-8">订阅与支付历史</h2>

          <div class="bg-gray-50 rounded-2xl overflow-hidden">
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
                <tr class="hover:bg-white transition-colors">
                  <td class="px-6 py-4 text-sm text-gray-900">Promax终身会员</td>
                  <td class="px-6 py-4 text-sm text-gray-900">¥2688</td>
                  <td class="px-6 py-4 text-sm text-gray-600">2026-01-12 19:25:36</td>
                  <td class="px-6 py-4 text-sm"><a href="#" class="text-blue-600 hover:underline">https://xinyinqin.com</a></td>
                </tr>
                <tr class="hover:bg-white transition-colors">
                  <td class="px-6 py-4 text-sm text-gray-900">Promax终身会员</td>
                  <td class="px-6 py-4 text-sm text-gray-900">¥299</td>
                  <td class="px-6 py-4 text-sm text-gray-600">2025-12-12 19:25:36</td>
                  <td class="px-6 py-4 text-sm"><a href="#" class="text-blue-600 hover:underline">https://xinyinqin.com</a></td>
                </tr>
                <tr class="hover:bg-white transition-colors">
                  <td class="px-6 py-4 text-sm text-gray-900">Promax终身会员</td>
                  <td class="px-6 py-4 text-sm text-gray-900">¥299</td>
                  <td class="px-6 py-4 text-sm text-gray-600">2025-11-12 19:25:36</td>
                  <td class="px-6 py-4 text-sm"><a href="#" class="text-blue-600 hover:underline">https://xinyinqin.com</a></td>
                </tr>
                <tr class="hover:bg-white transition-colors">
                  <td class="px-6 py-4 text-sm text-gray-900">Pro终身会员</td>
                  <td class="px-6 py-4 text-sm text-gray-900">¥99</td>
                  <td class="px-6 py-4 text-sm text-gray-600">2025-10-12 19:25:36</td>
                  <td class="px-6 py-4 text-sm"><a href="#" class="text-blue-600 hover:underline">https://xinyinqin.com</a></td>
                </tr>
                <tr class="hover:bg-white transition-colors">
                  <td class="px-6 py-4 text-sm text-gray-900">Pro终身会员</td>
                  <td class="px-6 py-4 text-sm text-gray-900">¥99</td>
                  <td class="px-6 py-4 text-sm text-gray-600">2025-09-12 19:25:36</td>
                  <td class="px-6 py-4 text-sm"><a href="#" class="text-blue-600 hover:underline">https://xinyinqin.com</a></td>
                </tr>
              </tbody>
            </table>
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
import PricingSection from '@/components/home/PricingSection.vue'
</script>

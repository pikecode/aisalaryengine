<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-6">

      <!-- Title -->
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-900">定价套餐方案</h2>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div
          v-for="plan in plans"
          :key="plan.id"
          class="p-8 hover:shadow-md transition-shadow overflow-hidden"
          :style="{ background: plan.bg, borderRadius: '12px', border: plan.border || '1px solid rgba(13,13,13,0.1)' }"
        >
          <!-- Name -->
          <div class="flex items-center gap-2 mb-4">
            <template v-if="plan.id !== 'free'">
              <img v-if="plan.id === 'pro'" src="/images/pro.png" alt="pro" class="w-6 h-6" />
              <img v-else src="/images/zhongshen.png" alt="终身" class="w-6 h-6" />
            </template>
            <h3 style="font-family: Roboto; font-weight: 600; font-size: 32px; color: #393939; line-height: 24px; text-align: center;">{{ plan.name }}</h3>
          </div>
          <div class="mb-6" style="height:0.5px;border-radius:8px;border:0.5px solid #E9E9E9;background:linear-gradient(39deg,#FFF6E4 0%,#E3E7FF 100%);"></div>

          <!-- Price row -->
          <div class="flex items-end justify-between mb-8">
            <div class="flex items-baseline gap-1">
              <span class="text-base" :style="{ color: plan.priceColor || '#111827' }">¥</span>
              <span class="text-6xl font-bold leading-none" :style="{ color: plan.priceColor || '#111827' }">{{ plan.price }}</span>
            </div>
            <span class="text-sm text-gray-400 mb-1">{{ plan.periodLabel }}</span>
          </div>

          <!-- CTA -->
          <button
            class="w-full py-4 transition-all mb-8 block"
            :style="{
              borderRadius: '100px',
              border: plan.ctaStyle === 'solid' ? 'none' : '1px solid #393939',
              background: plan.ctaStyle === 'solid' ? '#000000' : '#F9F9F9',
              fontFamily: '\'Source Han Sans CN\'',
              fontWeight: 500,
              fontSize: '24px',
              color: plan.ctaStyle === 'solid' ? '#FFFFFF' : '#393939',
              lineHeight: '24px',
            }"
          >
            {{ plan.ctaText }}
          </button>

          <!-- Features -->
          <ul class="space-y-4">
            <li v-for="f in plan.features" :key="f" class="flex items-center gap-3 text-sm text-gray-700">
              <span
                class="w-5 h-5 flex-shrink-0 border rounded flex items-center justify-center"
                :class="plan.id === 'free' ? 'border-gray-300' : plan.id === 'pro' ? 'border-gray-400/50 bg-white/40' : 'border-orange-300/60 bg-white/40'"
              >
                <svg class="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" /></svg>
              </span>
              {{ f }}
            </li>
            <li v-for="f in plan.disabledFeatures" :key="f" class="flex items-center gap-3 text-sm text-gray-400">
              <span class="w-5 h-5 flex-shrink-0 border border-gray-200 rounded flex items-center justify-center">
                <svg class="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
              </span>
              {{ f }}
            </li>
          </ul>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { plans } from '@/data/pricing'
</script>

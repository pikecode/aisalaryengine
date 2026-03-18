<template>
  <section class="py-8 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4">

      <!-- Title -->
      <div class="text-center mb-6">
        <h2 class="text-2xl font-bold text-gray-900">定价套餐方案</h2>
      </div>

      <!-- Cards scroll -->
      <div class="flex gap-2.5 overflow-x-auto pb-2" style="scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none;">
        <div
          v-for="plan in plans"
          :key="plan.id"
          class="flex-shrink-0 rounded-xl p-4 flex flex-col"
          style="width:160px;scroll-snap-align:center;"
          :style="{ background: plan.bg, border: plan.border || '1px solid rgba(13,13,13,0.08)' }"
        >
          <!-- Name -->
          <div class="flex items-center gap-1 mb-2">
            <template v-if="plan.id !== 'free'">
              <img v-if="plan.id === 'pro'" src="/images/pro.png" alt="pro" class="w-3.5 h-3.5 flex-shrink-0" />
              <img v-else src="/images/zhongshen.png" alt="终身" class="w-3.5 h-3.5 flex-shrink-0" />
            </template>
            <h3 class="text-sm font-bold text-gray-900 truncate">{{ plan.name }}</h3>
          </div>

          <!-- Price -->
          <div class="flex items-baseline gap-0.5 mb-1">
            <span class="text-xs" :style="{ color: plan.priceColor || '#111827' }">¥</span>
            <span class="text-2xl font-bold leading-none" :style="{ color: plan.priceColor || '#111827' }">{{ plan.price }}</span>
          </div>
          <div class="text-[10px] text-gray-400 mb-3 leading-tight">{{ plan.periodLabel }}</div>

          <!-- CTA -->
          <button
            class="w-full py-1.5 rounded-full font-medium text-xs transition-all mb-3"
            :class="plan.ctaStyle === 'solid'
              ? 'bg-gray-900 hover:bg-gray-800 text-white'
              : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200'"
          >
            {{ plan.ctaText }}
          </button>

          <!-- Features -->
          <ul class="space-y-1.5 overflow-hidden">
            <li v-for="f in plan.features" :key="f" class="flex items-center gap-1.5 text-[10px] text-gray-700">
              <span
                class="w-3.5 h-3.5 flex-shrink-0 border rounded flex items-center justify-center"
                :class="plan.id === 'free' ? 'border-gray-300' : plan.id === 'pro' ? 'border-gray-400/50 bg-white/40' : 'border-orange-300/60 bg-white/40'"
              >
                <svg class="w-2 h-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" /></svg>
              </span>
              <span class="truncate">{{ f }}</span>
            </li>
            <li v-for="f in plan.disabledFeatures" :key="f" class="flex items-center gap-1.5 text-[10px] text-gray-400">
              <span class="w-3.5 h-3.5 flex-shrink-0 border border-gray-200 rounded flex items-center justify-center">
                <svg class="w-2 h-2 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
              </span>
              <span class="truncate">{{ f }}</span>
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

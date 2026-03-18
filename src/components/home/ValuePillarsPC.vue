<template>
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-6">

      <!-- Title -->
      <div class="text-center mb-12">
        <h2 class="text-[50px] leading-[60px] font-bold text-gray-900">四大价值支柱</h2>
      </div>

      <!-- Cards Grid -->
      <div class="mb-16">
        <div class="grid grid-cols-3 gap-6">
          <PillarCard
            v-for="(pillar, index) in pillars"
            :key="pillar.title"
            :pillar="pillar"
            :index="index"
          />
        </div>
      </div>

      <!-- Promo Section -->
      <div class="bg-white rounded-[20px] overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg" style="box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.06);">
        <div class="grid grid-cols-[45%_55%] items-center">

          <!-- Left: Text Content -->
          <div class="p-12">
            <h2 class="text-[24px] font-bold text-[#333333] mb-4" style="font-family: PingFang SC, PingFang SC;">
              不仅仅是创造，更是流量变现
            </h2>
            <p class="text-[16px] font-medium leading-[30px] mb-[30px]" style="font-family: PingFang SC, PingFang SC; color: rgba(0,0,0,0.6);">
              发布项目，精准匹配Pro会员。赚取信息解锁费，私域流量沉淀。
            </p>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3 text-gray-600">
                <span class="text-base">开启线索变现</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <p class="text-[12px] font-normal leading-[24px]" style="font-family: Roboto, Roboto; color: rgba(153,153,153,0.7);">
                平台仅提供信息展示与撮合服务，交易由双方自行沟通
              </p>
            </div>
          </div>

          <!-- Right: Image -->
          <div class="relative h-full bg-[#F7FDFF] rounded-[20px] flex items-center justify-center p-[30px]">
            <img
              src="/images/promo-bg.png"
              alt="累计向创客分红"
              class="max-w-full max-h-full object-contain bg-[#EEF5FF] rounded-[10px]"
            />
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import PillarCard from './PillarCard.vue'
import { pillars } from '@/data/pillars'
</script>

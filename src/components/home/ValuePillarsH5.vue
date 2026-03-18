<template>
  <section class="py-8 bg-white">
    <div class="max-w-7xl mx-auto px-4">

      <!-- Title -->
      <div class="text-center mb-8">
        <h2 class="text-[18px] leading-[27px] font-bold text-gray-900">四大价值支柱</h2>
      </div>

      <!-- Cards Swiper -->
      <div class="mb-8">
        <swiper
          :slides-per-view="1.2"
          :space-between="16"
          :centered-slides="true"
          :initial-slide="1"
          :modules="modules"
        >
          <swiper-slide
            v-for="(pillar, index) in pillars"
            :key="pillar.title"
          >
            <PillarCard :pillar="pillar" :index="index" />
          </swiper-slide>
        </swiper>
      </div>

      <!-- Promo Section -->
      <div class="bg-white rounded-[20px] p-6 overflow-hidden" style="box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.06);">

        <!-- Text Content -->
        <div class="mb-4">
          <h2 class="text-[14px] font-bold text-[#333333] mb-3" style="font-family: PingFang SC, PingFang SC;">
            不仅仅是创造，更是流量变现
          </h2>
          <p class="text-[12px] font-medium leading-[18px] mb-4" style="font-family: PingFang SC, PingFang SC; color: rgba(0,0,0,0.6);">
            发布项目，精准匹配Pro会员。赚取信息解锁费，私域流量沉淀。<span class="text-[10px] font-normal leading-[12px]" style="font-family: PingFang SC, PingFang SC; color: rgba(153,153,153,0.7);">平台仅提供信息展示与撮合服务，交易由双方自行沟通</span>
          </p>
          <div class="flex items-center justify-end gap-2 text-[#333333]">
            <span class="text-[10px] font-medium leading-[10px]" style="font-family: PingFang SC, PingFang SC;">开启线索变现</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>

        <!-- Image -->
        <div class="relative rounded-[10px] overflow-hidden bg-[#F7FDFF] p-4">
          <img
            src="/images/promo-bg.png"
            alt="累计向创客分红"
            class="w-full h-auto object-contain"
          />
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import PillarCard from './PillarCard.vue'
import { pillars } from '@/data/pillars'
import 'swiper/css'
import 'swiper/css/pagination'

const modules = [Pagination]
</script>

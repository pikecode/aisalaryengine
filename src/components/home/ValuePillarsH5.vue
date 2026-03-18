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
      <div class="bg-white border-2 border-dashed border-gray-300 rounded-2xl shadow-xl p-6 overflow-hidden">
        <div class="space-y-6">

          <!-- Text Content -->
          <div class="relative z-10">
            <h2 class="text-2xl font-bold text-gray-900 mb-3">
              不仅仅是创造，更是流量变现
            </h2>
            <p class="text-sm text-gray-600 mb-4 leading-relaxed">
              发布项目，精准匹配Pro会员。赚取信息解锁费，私域流量沉淀。
            </p>
            <button class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl">
              <span>开启线索变现</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <p class="text-xs text-gray-400 mt-3">
              平台仅提供信息展示与撮合服务，交易由双方自行沟通
            </p>
          </div>

          <!-- Amount Visualization -->
          <div class="relative rounded-2xl p-6 min-h-[280px] overflow-hidden">
            <!-- Background gradient -->
            <div class="absolute inset-0 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 opacity-60"></div>

            <!-- Top label -->
            <div class="absolute top-4 right-4 text-right z-10">
              <div class="text-xs text-gray-500 mb-1">累计向创客分红</div>
              <div class="text-sm font-bold text-orange-600">¥ 1,240,000+</div>
            </div>

            <!-- Floating amounts -->
            <div class="absolute top-16 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl transform hover:scale-105 transition-transform">
              <div class="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">¥ 50,000</div>
            </div>

            <div class="absolute top-20 right-8 bg-white/95 backdrop-blur-sm rounded-2xl px-8 py-5 shadow-2xl transform hover:scale-105 transition-transform">
              <div class="text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">¥ 120,000</div>
            </div>

            <div class="absolute bottom-24 left-8 text-2xl font-bold text-yellow-500/80">
              ¥ 28,000
            </div>

            <div class="absolute bottom-28 right-12 text-xl font-bold text-orange-500/70">
              ¥ 35,000
            </div>

            <div class="absolute bottom-16 left-1/2 -translate-x-1/2 text-lg font-semibold text-yellow-400/60">
              ¥ 15,000
            </div>

            <div class="absolute bottom-12 right-6 text-base font-semibold text-orange-400/50">
              ¥ 8,000
            </div>

            <div class="absolute top-32 left-1/3 text-xl font-bold text-red-400/40">
              ¥ 22,000
            </div>
          </div>

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

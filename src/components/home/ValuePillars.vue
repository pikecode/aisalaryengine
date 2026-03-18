<template>
  <section class="py-8 md:py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 md:px-6">

      <!-- Title -->
      <div class="text-center mb-8 md:mb-12">
        <h2 class="text-[18px] leading-3 md:text-[50px] md:leading-6 font-bold text-gray-900">三大价值支柱</h2>
      </div>

      <!-- Cards Grid -->
      <div class="mb-8 md:mb-16">
        <!-- Mobile: Swiper -->
        <div class="md:hidden">
          <swiper
            :slides-per-view="1.2"
            :space-between="16"
            :centered-slides="true"
            :initial-slide="1"
            :pagination="{ clickable: true }"
            :modules="modules"
            class="pb-10"
          >
            <swiper-slide
              v-for="(pillar, index) in pillars"
              :key="pillar.title"
            >
              <PillarCard :pillar="pillar" :index="index" />
            </swiper-slide>
          </swiper>
        </div>

        <!-- Desktop: Grid -->
        <div class="hidden md:grid grid-cols-3 gap-6">
          <PillarCard
            v-for="(pillar, index) in pillars"
            :key="pillar.title"
            :pillar="pillar"
            :index="index"
          />
        </div>
      </div>

      <!-- Promo Section -->
      <div class="bg-white border-2 border-dashed border-gray-300 rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-12 overflow-hidden">
        <div class="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 md:gap-12 items-center">

          <!-- Left: Text Content -->
          <div class="relative z-10">
            <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              不仅仅是创造，更是流量变现
            </h2>
            <p class="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
              发布项目，精准匹配Pro会员。赚取信息解锁费，私域流量沉淀。
            </p>
            <button class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm md:text-base font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl">
              <span>开启线索变现</span>
              <svg class="w-4 md:w-5 h-4 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <p class="text-xs md:text-sm text-gray-400 mt-3">
              平台仅提供信息展示与撮合服务，交易由双方自行沟通
            </p>
          </div>

          <!-- Right: Amount Visualization -->
          <div class="relative rounded-2xl md:rounded-3xl p-6 md:p-8 min-h-[280px] md:min-h-[360px] overflow-hidden">
            <!-- Background gradient -->
            <div class="absolute inset-0 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 opacity-60"></div>

            <!-- Top label -->
            <div class="absolute top-4 right-4 text-right z-10">
              <div class="text-xs text-gray-500 mb-1">累计向创客分红</div>
              <div class="text-sm font-bold text-orange-600">¥ 1,240,000+</div>
            </div>

            <!-- Floating amounts with different sizes and positions -->
            <!-- Large prominent amounts -->
            <div class="absolute top-16 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl transform hover:scale-105 transition-transform">
              <div class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">¥ 50,000</div>
            </div>

            <div class="absolute top-20 right-8 bg-white/95 backdrop-blur-sm rounded-2xl px-8 py-5 shadow-2xl transform hover:scale-105 transition-transform">
              <div class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">¥ 120,000</div>
            </div>

            <!-- amounts -->
            <div class="absolute bottom-24 left-8 text-2xl md:text-3xl font-bold text-yellow-500/80">
              ¥ 28,000
            </div>

            <div class="absolute bottom-28 right-12 text-xl md:text-2xl font-bold text-orange-500/70">
              ¥ 35,000
            </div>

            <!-- Small amounts -->
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
import 'swiper/css'
import 'swiper/css/pagination'

const modules = [Pagination]

const pillars = [
  {
    title: '项目模版库',
    desc: '200+经过验证的创业副本，涵盖AI写作、电商、自媒体等多个领域',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
  },
  {
    title: 'AI工作台',
    desc: '智能化项目生成工具，帮助你快速启动创业项目',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 0 016 0z'
  },
  {
    title: 'Pro社区',
    desc: '与5000+创客交流经验，获取一手创业资讯和实战技巧',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  }
]
</script>

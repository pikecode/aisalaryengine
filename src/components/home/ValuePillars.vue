<template>
  <section class="py-8 md:py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 md:px-6">

      <!-- Title -->
      <div class="text-center mb-8 md:mb-12">
        <h2 class="text-2xl md:text-4xl font-bold text-gray-900">四大价值支柱</h2>
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
              <div class="bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl p-6 flex flex-col group cursor-pointer hover:shadow-lg transition-all duration-300 h-full">
              <!-- Illustration Area -->
              <div class="w-full h-32 mb-4 rounded-xl bg-white/80 backdrop-blur-sm flex items-center justify-center overflow-hidden relative">
                <div v-if="index === 0" class="absolute left-3 w-16 h-16 bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 rounded-lg transform -rotate-12"></div>
                <div v-if="index === 0" class="absolute right-4 flex flex-col gap-1.5">
                  <div class="w-12 h-1.5 bg-blue-200 rounded"></div>
                  <div class="w-10 h-1.5 bg-blue-200 rounded"></div>
                  <div class="flex gap-1 mt-1">
                    <div class="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <div class="w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
                    <div class="w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
                    <div class="w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
                  </div>
                </div>

                <div v-if="index === 1" class="flex flex-col gap-1.5 w-full px-4">
                  <div class="flex gap-2">
                    <div class="w-10 h-1.5 bg-blue-200 rounded"></div>
                    <div class="w-6 h-1.5 bg-blue-200 rounded"></div>
                  </div>
                  <div class="w-12 h-2 bg-blue-400 rounded"></div>
                  <div class="flex gap-2 mt-1">
                    <div class="w-8 h-1.5 bg-blue-200 rounded"></div>
                    <div class="w-5 h-1.5 bg-blue-200 rounded"></div>
                  </div>
                  <div class="flex gap-2">
                    <div class="w-6 h-1.5 bg-blue-200 rounded"></div>
                    <div class="w-10 h-1.5 bg-blue-300 rounded"></div>
                  </div>
                </div>

                <div v-if="index === 2" class="relative w-full h-full flex items-center justify-center">
                  <div class="absolute top-3 left-4 w-8 h-8 bg-blue-200 rounded-full"></div>
                  <div class="absolute top-4 right-6 bg-blue-100 rounded-xl px-3 py-1.5 w-24">
                    <div class="w-full h-1.5 bg-blue-300 rounded mb-1"></div>
                    <div class="w-16 h-1.5 bg-blue-200 rounded"></div>
                  </div>
                </div>

                <div v-if="index === 3" class="relative w-full h-full flex items-center justify-center">
                  <div class="absolute top-3 right-4 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                    </svg>
                  </div>
                  <div class="absolute bottom-4 left-4 bg-blue-50 rounded-xl px-3 py-2 w-28 border border-blue-200">
                    <div class="w-full h-1.5 bg-blue-300 rounded mb-1.5"></div>
                    <div class="w-20 h-1.5 bg-blue-200 rounded"></div>
                  </div>
                </div>
              </div>

              <!-- Content -->
              <div class="flex-1 mb-3">
                <h3 class="text-lg font-bold text-gray-900 mb-2">{{ pillar.title }}</h3>
                <p class="text-xs text-gray-600 leading-relaxed">{{ pillar.desc }}</p>
              </div>

              <!-- Learn More Link -->
              <div class="flex items-center justify-end gap-2 text-gray-600 text-xs font-medium group-hover:text-blue-600 transition-colors">
                <span>了解更多</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>

        <!-- Desktop: Grid -->
        <div class="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(pillar, index) in pillars"
            :key="pillar.title"
            class="bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-3xl p-8 flex flex-col group cursor-pointer hover:shadow-lg transition-all duration-300"
          >
            <!-- Illustration Area -->
            <div class="w-full h-40 mb-6 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center overflow-hidden relative">
              <div v-if="index === 0" class="absolute left-4 w-20 h-20 bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 rounded-lg transform -rotate-12"></div>
              <div v-if="index === 0" class="absolute right-6 flex flex-col gap-2">
                <div class="w-16 h-2 bg-blue-200 rounded"></div>
                <div class="w-12 h-2 bg-blue-200 rounded"></div>
                <div class="flex gap-1 mt-2">
                  <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div class="w-2 h-2 bg-blue-300 rounded-full"></div>
                  <div class="w-2 h-2 bg-blue-300 rounded-full"></div>
                  <div class="w-2 h-2 bg-blue-300 rounded-full"></div>
                </div>
              </div>

              <div v-if="index === 1" class="flex flex-col gap-2 w-full px-6">
                <div class="flex gap-2">
                  <div class="w-12 h-2 bg-blue-200 rounded"></div>
                  <div class="w-8 h-2 bg-blue-200 rounded"></div>
                </div>
                <div class="w-16 h-3 bg-blue-400 rounded"></div>
                <div class="flex gap-2 mt-2">
                  <div class="w-10 h-2 bg-blue-200 rounded"></div>
                  <div class="w-6 h-2 bg-blue-200 rounded"></div>
                </div>
                <div class="flex gap-2">
                  <div class="w-8 h-2 bg-blue-200 rounded"></div>
                  <div class="w-12 h-2 bg-blue-300 rounded"></div>
                </div>
              </div>

              <div v-if="index === 2" class="relative w-full h-full flex items-center justify-center">
                <div class="absolute top-4 left-6 w-10 h-10 bg-blue-200 rounded-full"></div>
                <div class="absolute top-6 right-8 bg-blue-100 rounded-2xl px-4 py-2 w-32">
                  <div class="w-full h-2 bg-blue-300 rounded mb-1"></div>
                  <div class="w-20 h-2 bg-blue-200 rounded"></div>
                </div>
              </div>

              <div v-if="index === 3" class="relative w-full h-full flex items-center justify-center">
                <div class="absolute top-4 right-6 w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                  </svg>
                </div>
                <div class="absolute bottom-6 left-6 bg-blue-50 rounded-2xl px-4 py-3 w-36 border border-blue-200">
                  <div class="w-full h-2 bg-blue-300 rounded mb-2"></div>
                  <div class="w-24 h-2 bg-blue-200 rounded"></div>
                </div>
              </div>
            </div>

            <!-- Content -->
            <div class="flex-1 mb-4">
              <h3 class="text-xl font-bold text-gray-900 mb-3">{{ pillar.title }}</h3>
              <p class="text-sm text-gray-600 leading-relaxed">{{ pillar.desc }}</p>
            </div>

            <!-- Learn More Link -->
            <div class="flex items-center justify-end gap-2 text-gray-600 text-sm font-medium group-hover:text-blue-600 transition-colors">
              <span>了解更多</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Promo Section -->
      <div class="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-12 overflow-hidden">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">

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

            <!-- Medium amounts -->
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
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 0 016 0z'
  },
  {
    title: 'Pro社区',
    desc: '与5000+创客交流经验，获取一手创业资讯和实战技巧',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  },
  {
    title: '用户共创与交易',
    desc: '发布你的项目到创客市场，平台担保交易，坐享收益',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 0 0118 0z'
  }
]
</script>
<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <div class="bg-white rounded-3xl shadow-lg p-8 md:p-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <!-- Left: Text Content -->
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              不仅仅是创造，更是流量变现
            </h2>
            <p class="text-base text-gray-600 mb-6 leading-relaxed">
              发布项目，精准匹配Pro会员。赚取信息解锁费，私域流量沉淀。
            </p>
            <button class="inline-flex items-center gap-2 text-gray-700 font-medium hover:text-blue-600 transition-colors">
              <span>开启线索变现</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <p class="text-sm text-gray-400 mt-2">
              平台仅提供信息展示与撮合服务，交易由双方自行沟通
            </p>
          </div>

          <!-- Right: Amount Visualization -->
          <div class="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 min-h-[320px]">
            <div class="absolute top-4 right-6 text-right">
              <div class="text-xs text-gray-400 mb-1">累计向创客分红</div>
              <div class="text-sm font-semibold text-yellow-500">¥ 1,240,000</div>
            </div>

            <!-- Large amounts -->
            <div class="absolute top-16 left-8 bg-white/60 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-sm">
              <div class="text-3xl font-bold text-yellow-500">¥ 1,240,000</div>
            </div>

            <div class="absolute top-20 right-12 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-5 shadow-md">
              <div class="text-4xl font-bold text-yellow-500">¥ 1,240,000</div>
            </div>

            <!-- Small amounts -->
            <div class="absolute bottom-20 left-12 text-xl font-semibold text-yellow-400">
              ¥ 1,240,000
            </div>

            <div class="absolute bottom-16 left-1/2 -translate-x-1/2 text-lg font-semibold text-yellow-400">
              ¥ 1,240,000
            </div>

            <div class="absolute bottom-12 right-8 text-base font-semibold text-yellow-400">
              ¥ 1,240,000
            </div>

            <div class="absolute bottom-20 right-20 text-2xl font-bold text-yellow-500">
              ¥ 1,240,000
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<template>
  <section class="py-12 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 md:px-6">

      <!-- Title -->
      <div class="text-center mb-10">
        <h2 class="text-3xl font-bold text-gray-900">定价套餐方案</h2>
      </div>

      <!-- Pricing Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

        <!-- Free Plan -->
        <div class="bg-white rounded-3xl p-8 border-2 border-gray-200">
          <!-- Header -->
          <div class="flex items-center gap-3 pb-6 mb-6 border-b border-gray-200">
            <div class="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-3xl">
              💎
            </div>
            <h3 class="text-2xl font-bold text-gray-900">免费版</h3>
          </div>

          <!-- Price -->
          <div class="flex items-end justify-between mb-6">
            <div>
              <span class="text-6xl font-bold text-gray-900">¥0</span>
            </div>
            <div class="text-sm text-gray-500 pb-2">
              永久免费
            </div>
          </div>

          <!-- Button -->
          <button class="w-full py-3 rounded-full font-semibold text-base bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-300 transition-all mb-8">
            了解详情
          </button>

          <!-- Features -->
          <ul class="space-y-3">
            <li class="flex items-start gap-2 text-sm text-gray-900">
              <svg class="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              浏览所有项目模板
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-900">
              <svg class="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              社区只读权限
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-900">
              <svg class="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              基础AI对话(每日10次)
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-400">
              <svg class="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              项目模版详细内容
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-400">
              <svg class="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              AI项目工作台
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-400">
              <svg class="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              社区发帖权限
            </li>
          </ul>
        </div>

        <!-- Pro Plan -->
        <div class="bg-white rounded-3xl p-8 border-2 border-gray-900 relative">
          <!-- Recommended Badge -->
          <div class="absolute -top-3 right-8">
            <span class="bg-gray-900 text-white text-xs font-semibold px-4 py-1.5 rounded-full">推荐</span>
          </div>

          <!-- Header -->
          <div class="flex items-center gap-3 pb-6 mb-6 border-b border-gray-200">
            <div class="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-3xl">
              💎
            </div>
            <h3 class="text-2xl font-bold text-gray-900">Pro会员版</h3>
          </div>

          <!-- Price -->
          <div class="flex items-end justify-between mb-6">
            <div>
              <span class="text-6xl font-bold text-gray-900">¥99</span>
              <span class="text-lg text-gray-400 ml-1">/月</span>
            </div>
            <div class="text-sm text-gray-500 pb-2">
              年付¥888（立省¥300）
            </div>
          </div>

          <!-- Button -->
          <button class="w-full py-3 rounded-xl font-semibold text-base bg-gray-900 hover:bg-gray-800 text-white transition-all mb-8">
            立即升级
          </button>

          <!-- Features -->
          <ul class="space-y-3">
            <li class="flex items-start gap-2 text-sm text-gray-900">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              200+精选项目模板
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-900">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              无限次AI项目生成
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-900">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              无限制AI工具（超额付费）
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-900">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              定制AI入驻方案
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-900">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              AI引擎（限额1000次）
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-900">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              上架项目（限额3个）
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-900">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              独家社区权限
            </li>
          </ul>
        </div>

      </div>
    </div>
  </section>
</template>

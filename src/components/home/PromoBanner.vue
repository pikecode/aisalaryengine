<template>
  <section class="bg-blue-600 py-8 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
      <div class="flex items-center justify-between gap-8">

        <!-- Left: Coin Icons -->
        <div class="hidden md:block relative flex-shrink-0">
          <div class="relative w-32 h-32">
            <!-- Main Coin -->
            <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600 shadow-2xl flex items-center justify-center">
              <span class="text-4xl">¥</span>
            </div>
            <!-- Small Coins -->
            <div class="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-lg flex items-center justify-center">
              <span class="text-lg">¥</span>
            </div>
            <div class="absolute -bottom-2 -left-2 w-8 h-8 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-lg flex items-center justify-center">
              <span class="text-sm">¥</span>
            </div>
          </div>
        </div>

        <!-- Center: Text Content -->
        <div class="flex-1 text-center md:text-left">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-2">
            不仅仅是创造，更是变现
          </h2>
          <p class="text-sm md:text-base text-white/90">
            在AI工作台完成项目后，一键发布到创客市场，平台担保交易，坐享技术服务费收益
          </p>
        </div>

        <!-- Right: Amount Display -->
        <div class="hidden md:block flex-shrink-0 text-right">
          <div class="text-xs text-white/70 mb-1">累计向创客分红</div>
          <div class="text-3xl font-bold text-yellow-300">
            ¥ 1,240,000
          </div>
          <div class="text-xs text-white/70 mt-1">累计向创客分红</div>
        </div>

      </div>
    </div>
  </section>
</template>

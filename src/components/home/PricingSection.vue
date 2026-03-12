<template>
  <section class="py-8 md:py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 md:px-6">

      <!-- Title -->
      <div class="text-center mb-6 md:mb-12">
        <h2 class="text-2xl md:text-4xl font-bold text-gray-900">定价套餐方案</h2>
      </div>

      <!-- Mobile: Horizontal Scroll -->
      <div class="md:hidden overflow-x-auto scrollbar-hide -mx-4 px-4 mb-6">
        <div class="flex gap-4 pb-4">
          <!-- Free Plan -->
          <div class="bg-white rounded-2xl p-6 shadow-sm flex-shrink-0 w-[280px]">
            <!-- Header -->
            <div class="mb-4">
              <h3 class="text-xl font-bold text-gray-900">免费版</h3>
            </div>

            <!-- Price -->
            <div class="flex items-baseline gap-1 mb-1">
              <span class="text-xs text-gray-500">¥</span>
              <span class="text-4xl font-bold text-gray-900">0</span>
            </div>
            <div class="text-xs text-gray-500 mb-6">永久免费</div>

            <!-- Button -->
            <button class="w-full py-2.5 rounded-full font-medium text-sm bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 transition-all mb-6">
              了解详情
            </button>

            <!-- Features -->
            <ul class="space-y-2">
              <li class="flex items-start gap-2 text-xs text-gray-700">
                <svg class="w-4 h-4 text-gray-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                浏览所有项目模版
              </li>
              <li class="flex items-start gap-2 text-xs text-gray-700">
                <svg class="w-4 h-4 text-gray-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                社区只读权限
              </li>
              <li class="flex items-start gap-2 text-xs text-gray-700">
                <svg class="w-4 h-4 text-gray-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                基础AI对话(每日10次)
              </li>
              <li class="flex items-start gap-2 text-xs text-gray-400">
                <svg class="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                项目模版详细内容
              </li>
            </ul>
          </div>

          <!-- Pro Plan -->
          <div class="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 shadow-sm flex-shrink-0 w-[280px]">
            <!-- Header -->
            <div class="flex items-center gap-2 mb-4">
              <svg class="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <h3 class="text-xl font-bold text-gray-900">Pro会员版</h3>
            </div>

            <!-- Price -->
            <div class="flex items-baseline gap-1 mb-1">
              <span class="text-xs text-gray-500">¥</span>
              <span class="text-4xl font-bold text-gray-900">99</span>
            </div>
            <div class="text-xs text-gray-600 mb-6">年付¥888（立省¥300）</div>

            <!-- Button -->
            <button class="w-full py-2.5 rounded-full font-medium text-sm bg-gray-900 hover:bg-gray-800 text-white transition-all mb-6">
              立即升级
            </button>

            <!-- Features -->
            <ul class="space-y-2">
              <li class="flex items-start gap-2 text-xs text-gray-700">
                <svg class="w-4 h-4 text-gray-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                免费版全部功能
              </li>
              <li class="flex items-start gap-2 text-xs text-gray-700">
                <svg class="w-4 h-4 text-gray-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                解锁所有项目模版详情
              </li>
              <li class="flex items-start gap-2 text-xs text-gray-700">
                <svg class="w-4 h-4 text-gray-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                AI项目工作台（无限项目）
              </li>
              <li class="flex items-start gap-2 text-xs text-gray-700">
                <svg class="w-4 h-4 text-gray-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                赠送300孵化点
              </li>
            </ul>
          </div>

          <!-- Lifetime Plan -->
          <div class="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 shadow-sm flex-shrink-0 w-[280px]">
            <!-- Header -->
            <div class="flex items-center gap-2 mb-4">
              <svg class="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <h3 class="text-xl font-bold text-gray-900">终身会员</h3>
            </div>

            <!-- Price -->
            <div class="flex items-baseline gap-1 mb-1">
              <span class="text-xs text-gray-500">¥</span>
              <span class="text-4xl font-bold text-gray-900">99</span>
            </div>
            <div class="text-xs text-gray-600 mb-6">年付¥888（立省¥300）</div>

            <!-- Button -->
            <button class="w-full py-2.5 rounded-full font-medium text-sm bg-gray-900 hover:bg-gray-800 text-white transition-all mb-6">
              立即升级
            </button>

            <!-- Features -->
            <ul class="space-y-2">
              <li class="flex items-start gap-2 text-xs text-gray-700">
                <svg class="w-4 h-4 text-gray-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Pro版全部功能
              </li>
              <li class="flex items-start gap-2 text-xs text-gray-700">
                <svg class="w-4 h-4 text-gray-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                AI对话（无限次数）
              </li>
              <li class="flex items-start gap-2 text-xs text-gray-700">
                <svg class="w-4 h-4 text-gray-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                上传项目（无限个）
              </li>
              <li class="flex items-start gap-2 text-xs text-gray-700">
                <svg class="w-4 h-4 text-gray-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                赠送1000孵化点
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Desktop: Grid -->
      <div class="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        <!-- Free Plan -->
        <div class="bg-white rounded-3xl p-8 shadow-sm">
          <!-- Header -->
          <div class="mb-6">
            <h3 class="text-2xl font-bold text-gray-900">免费版</h3>
          </div>

          <!-- Price -->
          <div class="flex items-baseline gap-2 mb-2">
            <span class="text-sm text-gray-500">¥</span>
            <span class="text-6xl font-bold text-gray-900">0</span>
          </div>
          <div class="text-sm text-gray-500 mb-8">永久免费</div>

          <!-- Button -->
          <button class="w-full py-3 rounded-full font-medium text-base bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 transition-all mb-8">
            了解详情
          </button>

          <!-- Features -->
          <ul class="space-y-3">
            <li class="flex items-start gap-2 text-sm text-gray-700">
              <svg class="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              浏览所有项目模版
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-700">
              <svg class="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              社区只读权限
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-700">
              <svg class="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              基础AI对话(每日10次)
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-400">
              <svg class="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              项目模版详细内容
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-400">
              <svg class="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              AI项目工作台
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-400">
              <svg class="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              社区发帖权限
            </li>
          </ul>
        </div>

        <!-- Pro Plan -->
        <div class="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8 shadow-sm">
          <!-- Header -->
          <div class="flex items-center gap-2 mb-6">
            <svg class="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <h3 class="text-2xl font-bold text-gray-900">Pro会员版</h3>
          </div>

          <!-- Price -->
          <div class="flex items-baseline gap-2 mb-2">
            <span class="text-sm text-gray-500">¥</span>
            <span class="text-6xl font-bold text-gray-900">99</span>
          </div>
          <div class="text-sm text-gray-600 mb-8">年付¥888（立省¥300）</div>

          <!-- Button -->
          <button class="w-full py-3 rounded-full font-medium text-base bg-gray-900 hover:bg-gray-800 text-white transition-all mb-8">
            立即升级
          </button>

          <!-- Features -->
          <ul class="space-y-3">
            <li class="flex items-start gap-2 text-sm text-gray-700">
              <svg class="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              免费版全部功能
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-700">
              <svg class="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              解锁所有项目模版详情
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-700">
              <svg class="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              AI项目工作台（无限项目）
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-700">
              <svg class="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              社区发帖与互动
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-700">
              <svg class="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              AI对话（每日100次）
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-700">
              <svg class="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              上传项目（最多10个）
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-700">
              <svg class="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              赠送300孵化点
            </li>
          </ul>
        </div>

        <!-- Lifetime Plan -->
        <div class="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 shadow-sm">
          <!-- Header -->
          <div class="flex items-center gap-2 mb-6">
            <svg class="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <h3 class="text-2xl font-bold text-gray-900">终身会员</h3>
          </div>

          <!-- Price -->
          <div class="flex items-baseline gap-2 mb-2">
            <span class="text-sm text-gray-500">¥</span>
            <span class="text-6xl font-bold text-gray-900">99</span>
          </div>
          <div class="text-sm text-gray-600 mb-8">年付¥888（立省¥300）</div>

          <!-- Button -->
          <button class="w-full py-3 rounded-full font-medium text-base bg-gray-900 hover:bg-gray-800 text-white transition-all mb-8">
            立即升级
          </button>

          <!-- Features -->
          <ul class="space-y-3">
            <li class="flex items-start gap-2 text-sm text-gray-700">
              <svg class="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              免费版全部功能
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-700">
              <svg class="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              解锁所有项目模版详情
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-700">
              <svg class="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              AI项目工作台（无限项目）
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-700">
              <svg class="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              社区发帖与互动
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-700">
              <svg class="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              AI对话（每日100次）
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-700">
              <svg class="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              上传项目（最多10个）
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-700">
              <svg class="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              赠送300孵化点
            </li>
          </ul>
        </div>

      </div>
    </div>
  </section>
</template>

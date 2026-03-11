<template>
  <div>
    <AppHeader />
    <main class="pt-16 min-h-screen bg-gray-50">

      <!-- Hero Section -->
      <section class="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16 relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 md:px-6 relative z-10">

          <!-- Title -->
          <h1 class="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
            200+经过市场验证的AI创业项目模板
          </h1>

          <!-- Search Box -->
          <div class="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 mb-6">
            <div class="flex gap-3 mb-4">
              <div class="flex-1 relative">
                <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="请输入关键词，你将找到适合你的项目"
                  class="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button class="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors">
                开始创作
              </button>
            </div>

            <!-- Hot Tags -->
            <div class="flex items-center gap-3 text-sm">
              <span class="text-gray-500">热门：</span>
              <button class="px-4 py-1.5 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors">AI研究</button>
              <button class="px-4 py-1.5 bg-orange-100 text-orange-600 rounded-lg hover:bg-orange-200 transition-colors">自媒体</button>
              <button class="px-4 py-1.5 bg-pink-100 text-pink-600 rounded-lg hover:bg-pink-200 transition-colors">电商项目</button>
              <button class="px-4 py-1.5 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors">知识付费</button>
              <span class="ml-auto text-blue-600 cursor-pointer hover:underline">找包新项目？[✨查看项目推荐]</span>
            </div>
          </div>

          <!-- Quick Filters -->
          <div class="flex justify-center gap-3">
            <button class="px-6 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:shadow-md transition-all">
              💰 低于1000元
            </button>
            <button class="px-6 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:shadow-md transition-all">
              🕐 副业/程序时间
            </button>
            <button class="px-6 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:shadow-md transition-all">
              ✅ 无代码
            </button>
          </div>

        </div>

        <!-- Decorative Icons -->
        <div class="absolute right-20 top-20 w-16 h-16 bg-blue-200 rounded-2xl opacity-50 transform rotate-12"></div>
        <div class="absolute right-40 bottom-20 w-12 h-12 bg-green-200 rounded-xl opacity-50"></div>
      </section>

      <!-- Main Content -->
      <section class="py-12">
        <div class="max-w-7xl mx-auto px-4 md:px-6">
          <div class="flex gap-6">

            <!-- Left Sidebar - Filters -->
            <aside class="w-64 flex-shrink-0">
              <div class="bg-white rounded-2xl p-6 sticky top-20">

                <!-- 市场阶段 -->
                <div class="mb-6">
                  <h3 class="text-sm font-semibold text-gray-900 mb-3">市场阶段</h3>
                  <div class="space-y-2 text-sm">
                    <label class="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" class="rounded" />
                      <span class="text-gray-700">蓝海/热先机</span>
                    </label>
                    <label class="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" class="rounded" />
                      <span class="text-gray-700">红海/拼执行</span>
                    </label>
                  </div>
                </div>

                <!-- 变现周期 -->
                <div class="mb-6">
                  <h3 class="text-sm font-semibold text-gray-900 mb-3">变现周期</h3>
                  <div class="space-y-2 text-sm">
                    <label class="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" class="rounded" />
                      <span class="text-gray-700">短期/快钱</span>
                    </label>
                    <label class="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" class="rounded" />
                      <span class="text-gray-700">中期/积累</span>
                    </label>
                    <label class="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" class="rounded" />
                      <span class="text-gray-700">长期/复利</span>
                    </label>
                  </div>
                </div>

                <!-- 启动资金 -->
                <div class="mb-6">
                  <h3 class="text-sm font-semibold text-gray-900 mb-3">启动资金</h3>
                  <div class="flex flex-wrap gap-2">
                    <button class="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg">0成本</button>
                    <button class="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200">千元级</button>
                    <button class="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200">万元级</button>
                    <button class="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200">百万级+</button>
                  </div>
                </div>

                <!-- 技术要求 -->
                <div class="mb-6">
                  <h3 class="text-sm font-semibold text-gray-900 mb-3">技术要求</h3>
                  <div class="space-y-2 text-sm">
                    <label class="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" class="rounded" />
                      <span class="text-gray-700">无代码要求</span>
                    </label>
                    <label class="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" class="rounded" />
                      <span class="text-gray-700">工具熟/组合</span>
                    </label>
                    <label class="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" class="rounded" />
                      <span class="text-gray-700">需编程/开发</span>
                    </label>
                  </div>
                </div>

                <!-- 行业分类 -->
                <div class="mb-6">
                  <h3 class="text-sm font-semibold text-gray-900 mb-3">行业分类</h3>
                  <div class="flex flex-wrap gap-2">
                    <button class="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg">自媒体创</button>
                    <button class="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200">电商/线下</button>
                    <button class="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200">内容创作</button>
                    <button class="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200">教育培训</button>
                    <button class="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200">效率提升</button>
                    <button class="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200">开发工具</button>
                  </div>
                </div>

                <!-- 投入模式 -->
                <div>
                  <h3 class="text-sm font-semibold text-gray-900 mb-3">投入模式</h3>
                  <div class="space-y-2 text-sm">
                    <label class="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" class="rounded" />
                      <span class="text-gray-700">全自动/兼职</span>
                    </label>
                    <label class="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" class="rounded" />
                      <span class="text-gray-700">程序时间/副业</span>
                    </label>
                    <label class="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" class="rounded" />
                      <span class="text-gray-700">需店铺/资质</span>
                    </label>
                  </div>
                </div>

              </div>
            </aside>

            <!-- Right Content - Project Cards -->
            <div class="flex-1">
              <!-- Recommendation Card -->
              <div class="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 mb-6 text-white relative overflow-hidden">
                <div class="relative z-10">
                  <h3 class="text-2xl font-bold mb-2">还没找到方向</h3>
                  <p class="text-blue-100 mb-4">先进行1分钟自我评估</p>
                  <button class="px-6 py-2 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors">
                    立即测评
                  </button>
                </div>
                <div class="absolute right-8 top-1/2 -translate-y-1/2 w-32 h-32 bg-white/10 rounded-full"></div>
              </div>

              <!-- Project Grid -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div v-for="i in 6" :key="i" class="bg-white rounded-2xl p-6 hover:shadow-lg transition-all relative">
                  <span class="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">0成本</span>

                  <div class="flex items-start gap-4 mb-4">
                    <div class="w-12 h-12 bg-blue-100 rounded-full flex-shrink-0"></div>
                    <div class="flex-1">
                      <h3 class="text-lg font-bold text-gray-900 mb-1">潜力：¥5k~20k/月</h3>
                      <div class="flex items-center gap-1 mb-2">
                        <span class="text-sm text-gray-500">门槛：</span>
                        <div class="flex gap-0.5">
                          <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg class="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      </div>
                      <div class="flex flex-wrap gap-2 mb-3">
                        <span class="px-3 py-1 bg-purple-100 text-purple-600 text-xs rounded-lg">开发工具</span>
                        <span class="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-lg">方式级</span>
                        <span class="px-3 py-1 bg-pink-100 text-pink-600 text-xs rounded-lg">营销链</span>
                      </div>
                    </div>
                  </div>

                  <h4 class="font-semibold text-gray-900 mb-2">AI智能客服SaaS系统</h4>
                  <p class="text-sm text-gray-600 mb-4">开发AI驱动客服系统，为中小企业提供智能客服解决方案及方案</p>
                  <div class="text-xs text-gray-400 mb-4">这 127人关注</div>

                  <div class="flex gap-2">
                    <button class="flex-1 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                      一键自动生成项目
                    </button>
                    <button class="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors">
                      分享解析版
                    </button>
                    <button class="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors">
                      收藏此机会
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/common/AppHeader.vue'
import AppFooter from '@/components/common/AppFooter.vue'
import ProjectGrid from '@/components/home/ProjectGrid.vue'
</script>

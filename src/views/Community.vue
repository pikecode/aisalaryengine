<template>
  <div>
    <AppHeader />
    <main class="pt-16 min-h-screen bg-gray-50">

      <!-- Community Header -->
      <section class="bg-white py-4 md:py-8">
        <div class="max-w-7xl mx-auto px-4 md:px-6">
          <div class="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
            <!-- Logo -->
            <div class="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-purple-500 to-yellow-400 rounded-2xl md:rounded-3xl flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
              <span class="text-2xl md:text-4xl font-bold text-white">AI</span>
            </div>

            <!-- Info -->
            <div class="flex-1 text-center md:text-left">
              <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <h1 class="text-xl md:text-2xl font-bold text-gray-900">AI薪引擎</h1>
                <span class="px-2 md:px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded mx-auto md:mx-0 w-fit">支持</span>
              </div>
              <p class="text-xs md:text-sm text-gray-600 leading-relaxed line-clamp-3 md:line-clamp-none">
                AI薪引擎站内介绍新引擎站内介绍新引擎站内介绍新引擎站内介绍新引擎站内介绍新引擎站内介绍AI薪引擎站内介绍新引擎站内介绍新引擎站内介绍新引擎站内介绍新引擎站内介绍新引擎站内介绍AI薪引擎站内介绍新引擎站内介绍新引擎站内介绍新引擎站内介绍新引擎站内介绍新引擎站内介绍引擎站内介绍新引擎站内介绍新引擎站内介绍新引擎站内介绍引擎站内介绍...查看更多>
              </p>
            </div>

            <!-- Stats -->
            <div class="flex justify-center md:justify-start gap-8 md:gap-12">
              <div class="text-center">
                <div class="text-2xl md:text-3xl font-bold text-gray-900">44,269</div>
                <div class="text-xs md:text-sm text-gray-500">关注</div>
              </div>
              <div class="text-center">
                <div class="text-2xl md:text-3xl font-bold text-gray-900">1,239</div>
                <div class="text-xs md:text-sm text-gray-500">帖子数量</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Tabs and Content -->
      <section class="py-4 md:py-6">
        <div class="max-w-7xl mx-auto px-4 md:px-6">
          <!-- Tabs -->
          <div class="flex items-center gap-6 md:gap-8 mb-4 md:mb-6 border-b border-gray-200 overflow-x-auto scrollbar-hide -mx-2 px-2">
            <button class="pb-3 text-gray-900 font-semibold border-b-2 border-blue-600 whitespace-nowrap text-sm md:text-base">专属讨论区</button>
            <button class="pb-3 text-gray-500 hover:text-gray-900 whitespace-nowrap text-sm md:text-base">成功案例墙</button>
          </div>

          <!-- Filter -->
          <div class="mb-4 md:mb-6">
            <button class="flex items-center gap-2 text-xs md:text-sm text-gray-600">
              <span>最新发布</span>
              <svg class="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          <!-- Post List -->
          <SkeletonList v-if="loading" :count="5" />
          <div v-else class="space-y-3 md:space-y-4 mb-6 md:mb-8">
            <div v-for="i in 10" :key="i" class="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 hover:shadow-lg transition-all">

              <!-- Mobile Layout -->
              <div class="md:hidden">
                <!-- Header -->
                <div class="flex items-start justify-between mb-3">
                  <div class="flex-1">
                    <div class="flex items-center gap-2 mb-2">
                      <h3 class="text-base font-bold text-gray-900 line-clamp-1">AI智能客服SaaS系统</h3>
                      <span class="px-2 py-0.5 bg-orange-100 text-orange-600 text-[10px] font-medium rounded flex-shrink-0">官方推荐</span>
                    </div>
                    <div class="flex items-center gap-2 mb-2">
                      <div class="w-5 h-5 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <span class="text-xs text-gray-500">张广雷</span>
                    </div>
                  </div>
                  <button class="px-3 py-1.5 bg-orange-100 text-orange-600 font-medium rounded-lg hover:bg-orange-200 transition-colors text-xs flex-shrink-0 ml-2">
                    订阅
                  </button>
                </div>

                <!-- Thumbnail -->
                <div class="w-full h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-3"></div>

                <!-- Content -->
                <p class="text-sm text-gray-600 mb-3 line-clamp-2">AI智能客服SaaS系统创业的价格精，我分享一些干货。AI智能客服SaaS系统创业的价格精，我分享一些干货。</p>

                <!-- Stats -->
                <div class="flex items-center justify-between text-xs text-gray-500">
                  <div class="flex items-center gap-4">
                    <div class="flex items-center gap-1">
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span>25987</span>
                    </div>
                    <div class="flex items-center gap-1">
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span>159</span>
                    </div>
                    <div class="flex items-center gap-1">
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                      <span>159</span>
                    </div>
                  </div>
                  <span class="text-gray-400">205-04-18</span>
                </div>
              </div>

              <!-- Desktop Layout -->
              <div class="hidden md:flex gap-6">
                <!-- Thumbnail -->
                <div class="w-48 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex-shrink-0"></div>

                <!-- Content -->
                <div class="flex-1">
                  <div class="flex items-start justify-between mb-3">
                    <div class="flex-1">
                      <div class="flex items-center gap-2 mb-2">
                        <h3 class="text-lg font-bold text-gray-900">AI智能客服SaaS系统</h3>
                        <span class="px-3 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded">官方推荐</span>
                      </div>
                      <p class="text-sm text-gray-600">AI智能客服SaaS系统创业的价格精，我分享一些干货。AI智能客服SaaS系统创业的价格精，我分享一些干货。AI智能客服SaaS系统创业的价格精，我分享一些干货。</p>
                    </div>
                    <button class="ml-4 px-6 py-2 bg-orange-100 text-orange-600 font-medium rounded-lg hover:bg-orange-200 transition-colors flex items-center gap-1">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z" />
                      </svg>
                      订阅
                    </button>
                  </div>

                  <div class="flex items-center justify-between text-sm text-gray-500">
                    <div class="flex items-center gap-6">
                      <div class="flex items-center gap-2">
                        <div class="w-6 h-6 bg-blue-500 rounded-full"></div>
                        <span>张广雷</span>
                      </div>
                      <div class="flex items-center gap-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>发布于：205-04-18</span>
                      </div>
                      <div class="flex items-center gap-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span>浏览：25987</span>
                      </div>
                      <div class="flex items-center gap-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span>评论：159</span>
                      </div>
                      <div class="flex items-center gap-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                        <span>点赞：159</span>
                      </div>
                      <button class="text-red-500">举报</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination - Hidden on mobile, simplified -->
          <div class="hidden md:flex items-center justify-center gap-2">
            <select class="px-3 py-2 border border-gray-300 rounded-lg text-sm">
              <option>10条/页</option>
              <option>20条/页</option>
              <option>50条/页</option>
            </select>
            <button class="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">1</button>
            <button class="px-3 py-2 bg-blue-600 text-white rounded-lg text-sm">2</button>
            <button class="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">3</button>
            <button class="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">4</button>
            <span class="px-2">...</span>
            <button class="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">11</button>
            <span class="px-2 text-sm text-gray-500">跳至</span>
            <input type="number" class="w-16 px-2 py-2 border border-gray-300 rounded-lg text-sm text-center" value="11" />
            <span class="px-2 text-sm text-gray-500">/20页</span>
          </div>

          <!-- Mobile Load More -->
          <div class="md:hidden text-center">
            <button class="px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              加载更多
            </button>
          </div>

        </div>
      </section>

      <!-- Floating Button -->
      <button class="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-gray-900 hover:bg-gray-800 text-white rounded-full shadow-lg flex flex-col items-center justify-center transition-all">
        <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
        <span class="text-[10px] md:text-xs mt-0.5 md:mt-1">我要发帖</span>
      </button>

    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AppHeader from '@/components/common/AppHeader.vue'
import AppFooter from '@/components/common/AppFooter.vue'
import SkeletonList from '@/components/common/SkeletonList.vue'

// 加载状态
const loading = ref(true)

// 模拟数据加载
onMounted(() => {
  // 模拟2秒加载时间
  setTimeout(() => {
    loading.value = false
  }, 2000)
})
</script>

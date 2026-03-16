<template>
  <section class="hero-section-mobile">
    <div class="relative max-w-6xl mx-auto px-4 w-full">
      <div class="text-center">

        <!-- Small Title -->
        <p class="hero-subtitle">
          无论是创业还是副业，我们帮你迈出第一步
        </p>

        <!-- Main Title -->
        <h1 class="hero-title">
          AI薪引擎-抓住AI风口
        </h1>

        <!-- CTA Buttons -->
        <div class="flex flex-col gap-4 justify-center mb-12">
          <button class="cta-button cta-button-primary">
            成为签约创客
          </button>
          <button class="cta-button cta-button-secondary">
            创造我的项目
          </button>
        </div>

        <!-- Search Card -->
        <div class="bg-white rounded-3xl shadow-2xl p-8 mb-8">
          <!-- Quick Search Title -->
          <div class="flex items-center gap-2 mb-5">
            <span class="w-2 h-2 bg-blue-600 rounded-full"></span>
            <span class="text-sm font-medium text-gray-800">快速搜索</span>
          </div>

          <!-- Search Input -->
          <div class="flex flex-col gap-3 mb-5">
            <div class="flex items-center gap-3 bg-gray-100 rounded-xl px-5 py-3.5">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                v-model="searchQuery"
                type="text"
                placeholder="请输入关键词"
                class="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
              />
            </div>
            <button class="w-full font-semibold px-8 py-3.5 rounded-xl text-sm bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              开始创作
            </button>
          </div>

          <!-- Hot Tags -->
          <div class="flex items-center gap-2.5 flex-wrap">
            <span class="text-sm text-gray-600">热门：</span>
            <button class="text-sm px-4 py-1.5 rounded-md bg-blue-100 text-blue-700">
              AI写作
            </button>
            <button class="text-sm px-4 py-1.5 rounded-md bg-orange-100 text-orange-700">
              自媒体
            </button>
            <button class="text-sm px-4 py-1.5 rounded-md bg-purple-100 text-purple-700">
              电商项目
            </button>
            <button class="text-sm px-4 py-1.5 rounded-md bg-green-100 text-green-700">
              知识付费
            </button>
          </div>
        </div>

        <!-- Filter Pills -->
        <div class="flex flex-col gap-3 mb-12">
          <button class="flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border border-yellow-400 bg-yellow-50/80 text-gray-800">
            <span class="text-base">💰</span>
            <span class="text-sm font-medium">低于1000元</span>
            <span class="text-sm">→</span>
          </button>
          <button class="flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border border-blue-400 bg-blue-50/80 text-gray-800">
            <span class="text-base">🕐</span>
            <span class="text-sm font-medium">副业/碎片时间</span>
            <span class="text-sm">→</span>
          </button>
          <button class="flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border border-green-400 bg-green-50/80 text-gray-800">
            <span class="text-base">✓</span>
            <span class="text-sm font-medium">无代码</span>
            <span class="text-sm">→</span>
          </button>
        </div>

        <!-- Stats Cards -->
        <div class="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-6">
          <div class="grid grid-cols-1 gap-6">
            <div class="flex items-center gap-4">
              <div class="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                </svg>
              </div>
              <div>
                <div class="text-3xl font-bold text-gray-900">200+</div>
                <div class="text-sm text-gray-600">经过验证的创业副本</div>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div>
                <div class="text-3xl font-bold text-gray-900">5000+</div>
                <div class="text-sm text-gray-600">早期创客已加入</div>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
              </div>
              <div>
                <div class="text-3xl font-bold text-gray-900">100+</div>
                <div class="text-sm text-gray-600">社区分享的实践案例</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const searchQuery = ref('')
</script>

<style scoped>
.hero-section-mobile {
  position: relative;
  overflow: hidden;
  margin-top: -104px;
  padding-top: 404px;
  padding-bottom: 4rem;
  background-image: url('/src/assets/hero-bg.png');
  background-size: contain;
  background-position: center top;
  background-repeat: no-repeat;
}

.hero-subtitle {
  font-family: 'PingFang SC', sans-serif;
  font-weight: bold;
  font-size: 24px;
  color: #333333;
  line-height: 1.5;
  text-align: center;
  margin: 0 auto 20px;
  padding: 0 1rem;
}

.hero-title {
  font-family: 'MiSans', sans-serif;
  font-weight: 800;
  font-size: 32px;
  color: #333333;
  line-height: 1.2;
  text-align: center;
  margin: 0 auto 20px;
  padding: 0 1rem;
}

.cta-button {
  width: 100%;
  height: 56px;
  border-radius: 100px;
  border: 1px solid #393939;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  transition: all 0.3s;
}

.cta-button-primary {
  background-color: #393939;
  color: #FFFFFF;
}

.cta-button-secondary {
  background-color: white;
  color: #393939;
}
</style>

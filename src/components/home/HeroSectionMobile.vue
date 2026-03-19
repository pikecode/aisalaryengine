<template>
  <section class="hero-section-mobile">
    <div class="relative mx-auto px-4 w-full">
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
        <div class="flex flex-row gap-3 justify-center mb-8">
          <button class="cta-button cta-button-primary">
            成为签约创客
          </button>
          <button class="cta-button cta-button-secondary">
            创造我的项目
          </button>
        </div>

        <!-- Search Card -->
        <div class="w-full search-card mb-5">
          <!-- Quick Search Title -->
          <div class="flex items-center gap-2 mb-4">
            <span class="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></span>
            <span class="quick-search-title">快速搜索</span>
          </div>

          <!-- Search Input -->
          <div class="search-container mb-4">
            <svg class="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="请输入关键词，快速找到适合你的项目"
              class="search-input"
            />
            <button class="search-button">
              开始创作
            </button>
          </div>

          <!-- Hot Tags -->
          <div class="flex items-center gap-2 flex-wrap">
            <span class="hot-label">热门：</span>
            <button class="hot-tag bg-blue-100 text-blue-700">AI写作</button>
            <button class="hot-tag bg-orange-100 text-orange-700">自媒体</button>
            <button class="hot-tag bg-purple-100 text-purple-700">电商项目</button>
            <button class="hot-tag bg-green-100 text-green-700">知识付费</button>
          </div>
        </div>

        <!-- Filter Pills -->
        <div class="flex flex-row gap-3 justify-center mb-5 flex-wrap">
          <button class="filter-pill filter-pill-yellow">
            <img src="@/assets/low.png" alt="" class="filter-icon-img" />
            <span class="filter-text">低于1000元</span>
            <img src="@/assets/arrow.png" alt="" class="filter-arrow-img" />
          </button>
          <button class="filter-pill filter-pill-blue">
            <img src="@/assets/time.png" alt="" class="filter-icon-img" />
            <span class="filter-text">副业/碎片时间</span>
            <img src="@/assets/arrow.png" alt="" class="filter-arrow-img" />
          </button>
          <button class="filter-pill filter-pill-green">
            <img src="@/assets/code.png" alt="" class="filter-icon-img" />
            <span class="filter-text">无代码</span>
            <img src="@/assets/arrow.png" alt="" class="filter-arrow-img" />
          </button>
        </div>

      </div>

      <!-- Stats Card -->
      <div class="w-full stats-card">
        <div class="grid grid-cols-3">
          <div class="flex flex-col items-start gap-1">
            <div class="flex items-center gap-1">
              <img src="@/assets/1.png" alt="" class="stat-icon" />
              <div class="stat-number">200+</div>
            </div>
            <div class="stat-label">经过验证的创业副本</div>
          </div>
          <div class="flex flex-col items-start gap-1">
            <div class="flex items-center gap-1">
              <img src="@/assets/2.png" alt="" class="stat-icon" />
              <div class="stat-number">5000+</div>
            </div>
            <div class="stat-label">早期创客已加入</div>
          </div>
          <div class="flex flex-col items-start gap-1">
            <div class="flex items-center gap-1">
              <img src="@/assets/3.png" alt="" class="stat-icon" />
              <div class="stat-number">100+</div>
            </div>
            <div class="stat-label">社区分享的实践案例</div>
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
  margin-top: -54px;
  padding-top: 80px;
  padding-bottom: 3rem;
  background-image: url('@/assets/hero-bg.png');
  background-size: 100% auto;
  background-position: center top;
  background-repeat: no-repeat;
}

.hero-subtitle {
  font-family: 'PingFang SC', 'PingFang SC', sans-serif;
  font-weight: bold;
  font-size: 14px;
  color: #333333;
  line-height: 1.4;
  text-align: center;
  margin: 0 auto 16px;
}

.hero-title {
  font-family: 'PingFang SC', 'PingFang SC', sans-serif;
  font-weight: 800;
  font-size: 26px;
  color: #333333;
  line-height: 1.3;
  text-align: center;
  margin: 0 auto 20px;
}

.cta-button {
  width: 103px;
  height: 23px;
  border-radius: 32px;
  border: none;
  font-family: 'PingFang SC', 'PingFang SC', sans-serif;
  font-weight: bold;
  font-size: 12px;
  color: #FFFFFF;
  line-height: 1;
  text-align: center;
  transition: all 0.3s;
  padding: 0;
  white-space: nowrap;
  flex: none;
}

.cta-button-primary {
  background-color: #000000;
  color: #FFFFFF;
}

.cta-button-secondary {
  background-color: #000000;
  color: #FFFFFF;
}

.search-card {
  background: #FFFFFF;
  box-shadow: 0px 4px 38px 0px rgba(0, 117, 192, 0.33);
  border-radius: 20px;
  padding: 1.25rem;
}

.quick-search-title {
  font-family: 'PingFang SC', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #333333;
  line-height: 1;
}

.search-container {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 28px;
  background: #F6F7FA;
  border-radius: 6px;
  padding: 0 6px 0 12px;
}

.search-icon {
  width: 16px;
  height: 16px;
  color: #999999;
  flex-shrink: 0;
}

.search-input {
  flex: 1;
  background: transparent;
  outline: none;
  border: none;
  font-size: 12px;
  color: #333333;
  min-width: 0;
}

.search-input::placeholder {
  color: #999999;
}

.search-button {
  height: 28px;
  padding: 0 10px;
  background: linear-gradient(85deg, #1427FF 0%, #A114FF 100%);
  box-shadow: 0px 0px 2px 0px rgba(34, 37, 255, 0.29);
  border-radius: 3px;
  font-family: 'PingFang SC', 'PingFang SC', sans-serif;
  font-weight: bold;
  font-size: 10px;
  color: #FFFFFF;
  line-height: 1;
  border: none;
  cursor: pointer;
  flex-shrink: 0;
  white-space: nowrap;
}

.hot-label {
  font-family: 'PingFang SC', 'PingFang SC', sans-serif;
  font-weight: 500;
  font-size: 10px;
  color: #666666;
  line-height: 1;
  white-space: nowrap;
}

.hot-tag {
  padding: 4px 10px;
  border-radius: 20px;
  border: none;
  font-family: 'PingFang SC', 'PingFang SC', sans-serif;
  font-weight: 500;
  font-size: 10px;
  cursor: pointer;
  white-space: nowrap;
}

.filter-pill {
  display: flex;
  align-items: center;
  gap: 6px;
  height: 22px;
  padding: 0 10px;
  border-radius: 100px;
  border: 1px solid;
  cursor: pointer;
  transition: all 0.3s;
  white-space: nowrap;
  background: #FFFFFF;
}

.filter-icon-img {
  width: 13px;
  height: 13px;
  object-fit: contain;
}

.filter-text {
  font-family: 'PingFang SC', 'PingFang SC', sans-serif;
  font-weight: 500;
  font-size: 10px;
  color: #333333;
  line-height: 1;
}

.filter-arrow-img {
  width: 8px;
  height: 8px;
  object-fit: contain;
  align-self: center;
}

.filter-pill-yellow {
  border: 1.5px solid rgba(255, 204, 0, 0.5);
  box-shadow: none;
}

.filter-pill-blue {
  border: 1.5px solid rgba(20, 39, 255, 0.5);
  box-shadow: 0px 0px 6px 0px rgba(20, 39, 255, 0.3);
}

.filter-pill-green {
  border: 1.5px solid rgba(0, 197, 89, 0.5);
  box-shadow: 0px 0px 8px 0px rgba(0, 197, 89, 0.3);
}

.stats-card {
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 2px 69px 0px rgba(0, 0, 0, 0.03);
  border-radius: 16px;
  border: 1px solid #FFFFFF;
  padding: 1.25rem;
}

.stat-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
  flex-shrink: 0;
}

.stat-number {
  font-family: 'PingFangSC', 'PingFang SC', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #000000;
  line-height: 1.2;
}

.stat-label {
  font-family: 'PingFang SC', 'PingFang SC', sans-serif;
  font-weight: 400;
  font-size: 11px;
  color: rgba(0, 0, 0, 0.6);
  line-height: 1.2;
}
</style>

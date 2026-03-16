<template>
  <section class="hero-section-pc">
    <div class="relative mx-auto px-4 md:px-6 w-full">
      <div class="text-center max-w-6xl mx-auto">

        <!-- Small Title -->
        <p class="hero-subtitle">
          无论是创业还是副业，我们帮你迈出第一步
        </p>

        <!-- Main Title -->
        <h1 class="hero-title">
          AI薪引擎-抓住AI风口
        </h1>

        <!-- CTA Buttons -->
        <div class="flex flex-row gap-4 justify-center mb-12">
          <button class="cta-button cta-button-primary">
            成为签约创客
          </button>
          <button class="cta-button cta-button-secondary">
            创造我的项目
          </button>
        </div>

        <!-- Search Card -->
        <div class="search-card">
          <!-- Quick Search Title -->
          <div class="flex items-center gap-2 mb-5">
            <span class="w-2 h-2 bg-blue-600 rounded-full"></span>
            <span class="quick-search-title">快速搜索</span>
          </div>

          <!-- Search Input -->
          <div class="search-container mb-5">
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
          <div class="flex items-center gap-2.5 flex-wrap">
            <span class="hot-label">热门：</span>
            <button class="hot-tag bg-blue-100 text-blue-700 hover:bg-blue-200">
              AI写作
            </button>
            <button class="hot-tag bg-orange-100 text-orange-700 hover:bg-orange-200">
              自媒体
            </button>
            <button class="hot-tag bg-purple-100 text-purple-700 hover:bg-purple-200">
              电商项目
            </button>
            <button class="hot-tag bg-green-100 text-green-700 hover:bg-green-200">
              知识付费
            </button>
          </div>
        </div>

        <!-- Filter Pills -->
        <div class="flex flex-wrap gap-4 justify-center mb-10">
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

      <!-- Stats Cards -->
      <div class="stats-card">
        <div class="grid grid-cols-3 gap-8 divide-x divide-gray-200">
          <div class="flex items-center gap-4">
            <img src="@/assets/1.png" alt="" class="stat-icon" />
            <div>
              <div class="stat-number">200+</div>
              <div class="stat-label">经过验证的创业副本</div>
            </div>
          </div>

          <div class="flex items-center gap-4 pl-8">
            <img src="@/assets/2.png" alt="" class="stat-icon" />
            <div>
              <div class="stat-number">5000+</div>
              <div class="stat-label">早期创客已加入</div>
            </div>
          </div>

          <div class="flex items-center gap-4 pl-8">
            <img src="@/assets/3.png" alt="" class="stat-icon" />
            <div>
              <div class="stat-number">100+</div>
              <div class="stat-label">社区分享的实践案例</div>
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
.hero-section-pc {
  position: relative;
  overflow: hidden;
  margin-top: -104px;
  padding-top: 200px;
  padding-bottom: 4rem;
  background-image: url('/src/assets/hero-bg.png');
  background-size: contain;
  background-position: center top;
  background-repeat: no-repeat;
}

.hero-subtitle {
  width: 617px;
  font-family: 'PingFang SC', sans-serif;
  font-weight: bold;
  font-size: 32px;
  color: #333333;
  line-height: 1.5;
  text-align: center;
  margin: 0 auto 30px;
}

.hero-title {
  width: 777px;
  font-family: 'MiSans', sans-serif;
  font-weight: 800;
  font-size: 80px;
  color: #333333;
  line-height: 1.2;
  text-align: left;
  margin: 0 auto 30px;
}

.cta-button {
  width: 272px;
  height: 72px;
  border-radius: 100px;
  border: 1px solid #393939;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  transition: all 0.3s;
}

.cta-button-primary {
  background-color: #393939;
  color: #FFFFFF;
}

.cta-button-primary:hover {
  background-color: #2a2a2a;
}

.cta-button-secondary {
  background-color: white;
  color: #393939;
}

.cta-button-secondary:hover {
  background-color: #f5f5f5;
}

.search-card {
  width: 1197px;
  height: 242px;
  background: #FFFFFF;
  box-shadow: 0px 4px 38px 0px rgba(0, 117, 192, 0.33);
  border-radius: 30px;
  padding: 2rem;
  margin: 0 auto 40px;
}

.quick-search-title {
  width: 80px;
  height: 20px;
  font-family: 'PingFang SC', sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: #333333;
  line-height: 20px;
  text-align: left;
}

.search-container {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #F5F5F5;
  border-radius: 12px;
  padding: 8px 8px 8px 20px;
}

.search-icon {
  width: 20px;
  height: 20px;
  color: #999999;
  flex-shrink: 0;
}

.search-input {
  flex: 1;
  background: transparent;
  outline: none;
  border: none;
  font-size: 16px;
  color: #333333;
  min-width: 0;
}

.search-input::placeholder {
  color: #999999;
}

.search-button {
  width: 160px;
  height: 56px;
  background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%);
  border-radius: 12px;
  font-family: 'PingFang SC', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  flex-shrink: 0;
}

.search-button:hover {
  opacity: 0.9;
}

.hot-label {
  width: 60px;
  height: 20px;
  font-family: 'PingFang SC', sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: #666666;
  line-height: 20px;
  text-align: left;
}

.hot-tag {
  padding: 6px 16px;
  border-radius: 20px;
  border: none;
  font-family: 'Source Han Sans CN', sans-serif;
  font-weight: 400;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
}

.filter-pill {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  border-radius: 100px;
  border: 1px solid;
  cursor: pointer;
  transition: all 0.3s;
}

.filter-icon-img {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.filter-text {
  font-family: 'PingFang SC', sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #333333;
  line-height: 18px;
  text-align: center;
}

.filter-arrow-img {
  width: 16px;
  height: 16px;
  object-fit: contain;
}

.filter-pill-yellow {
  width: 205px;
  height: 52px;
  background: #FFFFFF;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.05);
  border-radius: 50px;
  border: 2px solid rgba(255, 204, 0, 0.5);
  color: #333333;
}

.filter-pill-yellow:hover {
  border-color: rgba(255, 204, 0, 0.8);
}

.filter-pill-blue {
  width: 225px;
  height: 52px;
  background: #FFFFFF;
  box-shadow: 0px 0px 8px 0px rgba(20, 39, 255, 0.5);
  border-radius: 50px;
  border: 2px solid rgba(20, 39, 255, 0.5);
  color: #333333;
}

.filter-pill-blue:hover {
  border-color: rgba(20, 39, 255, 0.8);
  box-shadow: 0px 0px 8px 0px rgba(20, 39, 255, 0.7);
}

.filter-pill-green {
  width: 180px;
  height: 52px;
  background: #FFFFFF;
  box-shadow: 0px 0px 11px 0px rgba(0, 197, 89, 0.5);
  border-radius: 50px;
  border: 2px solid rgba(0, 197, 89, 0.5);
  color: #333333;
}

.filter-pill-green:hover {
  border-color: rgba(0, 197, 89, 0.8);
  box-shadow: 0px 0px 11px 0px rgba(0, 197, 89, 0.7);
}

.stats-card {
  width: 1504px;
  height: 167px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 2px 69px 0px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  border: 1px solid #FFFFFF;
  padding: 2rem;
  margin: 0 auto;
}

.stat-icon {
  width: 56px;
  height: 56px;
  object-fit: contain;
  flex-shrink: 0;
}

.stat-number {
  width: 126px;
  height: 40px;
  font-family: 'DIN', sans-serif;
  font-weight: bold;
  font-size: 42px;
  color: #000000;
  line-height: 30px;
  text-align: left;
}

.stat-label {
  width: 265px;
  height: 33px;
  font-family: 'PingFang SC', sans-serif;
  font-weight: 400;
  font-size: 24px;
  color: rgba(0, 0, 0, 0.6);
  line-height: 30px;
  text-align: left;
}
</style>

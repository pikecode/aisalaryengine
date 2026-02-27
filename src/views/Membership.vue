<template>
  <div>
    <AppHeader />
    <main class="pt-16 min-h-screen">
      <div class="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div class="text-center mb-12">
          <h1 class="section-title mb-2">全球会员</h1>
          <p class="section-subtitle">选择适合你的计划，开启AI创业之旅</p>
        </div>
        <PricingSection />
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/common/AppHeader.vue'
import AppFooter from '@/components/common/AppFooter.vue'
import PricingSection from '@/components/home/PricingSection.vue'
</script>

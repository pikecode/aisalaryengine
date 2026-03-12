<template>
  <div class="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 animate-pulse">
    <!-- Header -->
    <div class="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
      <!-- Avatar -->
      <div class="skeleton-avatar flex-shrink-0"></div>

      <div class="flex-1">
        <!-- Title -->
        <div class="skeleton-text w-3/4 mb-2"></div>
        <!-- Subtitle -->
        <div class="skeleton-text w-1/2 h-3"></div>
      </div>

      <!-- Action Button -->
      <div class="skeleton w-16 h-8 rounded-lg"></div>
    </div>

    <!-- Image Placeholder -->
    <div class="skeleton w-full h-32 rounded-lg mb-3"></div>

    <!-- Content Lines -->
    <div class="space-y-2 mb-4">
      <div class="skeleton-text w-full"></div>
      <div class="skeleton-text w-4/5"></div>
    </div>

    <!-- Stats -->
    <div class="flex items-center gap-4">
      <div class="skeleton-text w-12"></div>
      <div class="skeleton-text w-12"></div>
      <div class="skeleton-text w-12"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 通用卡片骨架屏组件
// 适用于项目卡片、帖子卡片等场景
</script>
<template>
  <div class="bg-white rounded-xl md:rounded-2xl p-3 md:p-4 animate-pulse">
    <!-- Image -->
    <div class="skeleton w-full h-32 md:h-40 rounded-lg mb-3"></div>

    <!-- Title -->
    <div class="skeleton-text w-3/4 mb-2"></div>

    <!-- Tags -->
    <div class="flex gap-2 mb-3">
      <div class="skeleton w-16 h-6 rounded-full"></div>
      <div class="skeleton w-16 h-6 rounded-full"></div>
    </div>

    <!-- Description -->
    <div class="space-y-2 mb-3">
      <div class="skeleton-text w-full"></div>
      <div class="skeleton-text w-4/5"></div>
    </div>

    <!-- Stats -->
    <div class="flex items-center justify-between">
      <div class="skeleton-text w-20"></div>
      <div class="skeleton-text w-20"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 项目卡片专用骨架屏
</script>
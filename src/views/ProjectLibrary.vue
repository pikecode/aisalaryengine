<template>
  <div>
    <AppHeader />
    <main class="pt-16 min-h-screen">
      <div class="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <h1 class="section-title mb-2">AI创业方向库</h1>
        <p class="section-subtitle mb-8">精选200+验证可行的AI变现项目</p>
        <ProjectGrid />
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/common/AppHeader.vue'
import AppFooter from '@/components/common/AppFooter.vue'
import ProjectGrid from '@/components/home/ProjectGrid.vue'
</script>

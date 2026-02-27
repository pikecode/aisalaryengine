<template>
  <section class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <div class="text-center mb-8">
        <h2 class="section-title">四大价值支柱</h2>
        <p class="section-subtitle">从项目选择到落地变现，全程陪伴</p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <div
          v-for="pillar in pillars"
          :key="pillar.title"
          class="card p-6 text-center hover:shadow-md transition-all group cursor-pointer"
        >
          <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 transition-transform group-hover:scale-110"
            :class="pillar.bgColor">
            {{ pillar.icon }}
          </div>
          <h3 class="font-semibold text-gray-900 mb-2 text-sm md:text-base">{{ pillar.title }}</h3>
          <p class="text-xs md:text-sm text-gray-500 leading-relaxed">{{ pillar.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { mockPillars } from '@/data/content'

const pillars = mockPillars
</script>

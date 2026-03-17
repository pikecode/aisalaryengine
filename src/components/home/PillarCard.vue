<template>
  <div class="bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col group cursor-pointer hover:shadow-lg transition-all duration-300 h-full">
    <!-- Illustration Area -->
    <div class="w-full h-32 md:h-40 mb-4 md:mb-6 rounded-xl md:rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center overflow-hidden relative">
      <!-- Index 0: Project Templates -->
      <template v-if="index === 0">
        <div class="absolute left-3 md:left-4 w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 rounded-lg transform -rotate-12"></div>
        <div class="absolute right-4 md:right-6 flex flex-col gap-1.5 md:gap-2">
          <div class="w-12 md:w-16 h-1.5 md:h-2 bg-blue-200 rounded"></div>
          <div class="w-10 md:w-12 h-1.5 md:h-2 bg-blue-200 rounded"></div>
          <div class="flex gap-1 mt-1 md:mt-2">
            <div class="w-1.5 md:w-2 h-1.5 md:h-2 bg-blue-400 rounded-full"></div>
            <div class="w-1.5 md:w-2 h-1.5 md:h-2 bg-blue-300 rounded-full"></div>
            <div class="w-1.5 md:w-2 h-1.5 md:h-2 bg-blue-300 rounded-full"></div>
            <div class="w-1.5 md:w-2 h-1.5 md:h-2 bg-blue-300 rounded-full"></div>
          </div>
        </div>
      </template>

      <!-- Index 1: AI Workbench -->
      <template v-if="index === 1">
        <div class="flex flex-col gap-1.5 md:gap-2 w-full px-4 md:px-6">
          <div class="flex gap-2">
            <div class="w-10 md:w-12 h-1.5 md:h-2 bg-blue-200 rounded"></div>
            <div class="w-6 md:w-8 h-1.5 md:h-2 bg-blue-200 rounded"></div>
          </div>
          <div class="w-12 md:w-16 h-2 md:h-3 bg-blue-400 rounded"></div>
          <div class="flex gap-2 mt-1 md:mt-2">
            <div class="w-8 md:w-10 h-1.5 md:h-2 bg-blue-200 rounded"></div>
            <div class="w-5 md:w-6 h-1.5 md:h-2 bg-blue-200 rounded"></div>
          </div>
          <div class="flex gap-2">
            <div class="w-6 md:w-8 h-1.5 md:h-2 bg-blue-200 rounded"></div>
            <div class="w-10 md:w-12 h-1.5 md:h-2 bg-blue-300 rounded"></div>
          </div>
        </div>
      </template>

      <!-- Index 2: Pro Community -->
      <template v-if="index === 2">
        <div class="absolute top-3 md:top-4 left-4 md:left-6 w-8 md:w-10 h-8 md:h-10 bg-blue-200 rounded-full"></div>
        <div class="absolute top-4 md:top-6 right-6 md:right-8 bg-blue-100 rounded-xl md:rounded-2xl px-3 md:px-4 py-1.5 md:py-2 w-24 md:w-32">
          <div class="w-full h-1.5 md:h-2 bg-blue-300 rounded mb-1"></div>
          <div class="w-16 md:w-20 h-1.5 md:h-2 bg-blue-200 rounded"></div>
        </div>
      </template>

      <!-- Index 3: User Co-creation -->
      <template v-if="index === 3">
        <div class="absolute top-3 md:top-4 right-4 md:right-6 w-8 md:w-10 h-8 md:h-10 bg-blue-400 rounded-full flex items-center justify-center">
          <svg class="w-5 md:w-6 h-5 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
          </svg>
        </div>
        <div class="absolute bottom-4 md:bottom-6 left-4 md:left-6 bg-blue-50 rounded-xl md:rounded-2xl px-3 md:px-4 py-2 md:py-3 w-28 md:w-36 border border-blue-200">
          <div class="w-full h-1.5 md:h-2 bg-blue-300 rounded mb-1.5 md:mb-2"></div>
          <div class="w-20 md:w-24 h-1.5 md:h-2 bg-blue-200 rounded"></div>
        </div>
      </template>
    </div>

    <!-- Content -->
    <div class="flex-1 mb-3 md:mb-4">
      <h3 class="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{{ pillar.title }}</h3>
      <p class="text-xs md:text-sm text-gray-600 leading-relaxed">{{ pillar.desc }}</p>
    </div>

    <!-- Learn More Link -->
    <div class="flex items-center justify-end gap-2 text-gray-600 text-xs md:text-sm font-medium group-hover:text-blue-600 transition-colors">
      <span>了解更多</span>
      <svg class="w-3.5 md:w-4 h-3.5 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Pillar {
  title: string
  desc: string
  icon: string
}

interface Props {
  pillar: Pillar
  index: number
}

defineProps<Props>()
</script>
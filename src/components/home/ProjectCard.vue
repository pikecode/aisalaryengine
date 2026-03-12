<template>
  <!-- Featured card: horizontal layout on desktop, vertical on mobile -->
  <div
    v-if="isFeatured"
    class="rounded-2xl p-4 md:p-6 transition-all duration-200 cursor-pointer hover:shadow-xl border h-full bg-white border-gray-100"
  >
    <div class="flex flex-col md:flex-row items-start gap-4 md:gap-6 h-full">
      <!-- Left side: Badge + Content -->
      <div class="flex-1 w-full">
        <div class="flex items-start gap-2 md:gap-3 mb-3">
          <!-- Cost Badge -->
          <span class="inline-flex flex-col items-center justify-center px-2 md:px-3 py-1.5 md:py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white flex-shrink-0">
            <span class="text-2xl md:text-3xl font-bold leading-none">0</span>
            <span class="text-[10px] md:text-xs font-normal mt-0.5">成本</span>
          </span>

          <!-- Title + Tags -->
          <div class="flex-1">
            <h3 class="text-base md:text-lg font-bold text-gray-900 mb-2">
              {{ project.title }}
            </h3>

            <!-- Tags + Difficulty -->
            <div class="flex flex-wrap items-center gap-1.5 md:gap-2">
              <span
                v-for="tag in project.tags.slice(0, 3)"
                :key="tag"
                class="text-[10px] md:text-xs px-2 md:px-3 py-0.5 md:py-1 rounded-md bg-gray-100 text-gray-600"
              >
                {{ tag }}
              </span>

              <!-- Difficulty Stars -->
              <div class="flex items-center gap-0.5 md:gap-1">
                <span class="text-[10px] md:text-xs text-gray-600">门槛：</span>
                <svg v-for="i in 5" :key="i" class="w-3 md:w-3.5 h-3 md:h-3.5" :class="i <= difficulty ? 'text-yellow-400' : 'text-gray-300'" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Description -->
        <p class="text-xs md:text-sm text-gray-600 leading-relaxed">
          {{ project.description }}
        </p>
      </div>

      <!-- Right side: Stats + Button -->
      <div class="flex md:flex-col items-center md:items-end justify-between md:justify-between w-full md:w-auto mt-2 md:mt-0">
        <div class="text-left md:text-right mb-0 md:mb-4">
          <div class="text-xs md:text-sm flex items-center gap-1 mb-1 md:mb-2">
            <span class="text-gray-500">潜力：</span>
            <span class="text-gray-900 font-semibold">¥{{ priceRange }}/月</span>
          </div>
          <div class="text-[10px] md:text-xs text-gray-500 flex items-center gap-1">
            <svg class="w-3 md:w-4 h-3 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            {{ project.views }}人实践
          </div>
        </div>
        <button class="px-4 md:px-6 py-2 md:py-2.5 rounded-lg bg-white border border-gray-900 text-gray-900 text-xs md:text-sm font-medium hover:bg-gray-50 transition-colors whitespace-nowrap">
          立即上车
        </button>
      </div>
    </div>
  </div>

  <!-- Regular card: vertical layout -->
  <div
    v-else
    class="rounded-2xl p-4 md:p-6 transition-all duration-200 cursor-pointer hover:shadow-xl border h-full flex flex-col bg-white border-gray-100"
  >
    <!-- Badge + Title + Tags + Difficulty -->
    <div class="flex items-start gap-2 md:gap-3 mb-3">
      <!-- Cost Badge -->
      <span class="inline-flex flex-col items-center justify-center px-2 md:px-2.5 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white flex-shrink-0">
        <span class="text-xl md:text-2xl font-bold leading-none">0</span>
        <span class="text-[10px] md:text-xs font-normal">成本</span>
      </span>

      <!-- Title + Tags + Difficulty -->
      <div class="flex-1">
        <h3 class="text-sm md:text-lg font-bold text-gray-900 mb-2">
          {{ project.title }}
        </h3>

        <!-- Tags + Difficulty -->
        <div class="flex flex-wrap items-center gap-1.5 md:gap-2">
          <span
            v-for="tag in project.tags.slice(0, 3)"
            :key="tag"
            class="text-[10px] md:text-xs px-2 md:px-3 py-0.5 md:py-1 rounded-md bg-gray-100 text-gray-600"
          >
            {{ tag }}
          </span>

          <!-- Difficulty Stars -->
          <div class="flex items-center gap-0.5 md:gap-1">
            <span class="text-[10px] md:text-xs text-gray-600">门槛：</span>
            <svg v-for="i in 5" :key="i" class="w-3 md:w-3.5 h-3 md:h-3.5" :class="i <= difficulty ? 'text-yellow-400' : 'text-gray-300'" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Description -->
    <p class="text-xs md:text-sm text-gray-600 leading-relaxed mb-3 md:mb-4 flex-1">
      {{ project.description }}
    </p>

    <!-- Footer -->
    <div class="flex items-center justify-between pt-3 md:pt-4 border-t border-gray-200">
      <div class="flex items-center gap-3 md:gap-4">
        <div class="text-xs md:text-sm flex items-center gap-1">
          <span class="text-gray-500">潜力：</span>
          <span class="text-gray-900 font-semibold">¥{{ priceRange }}/月</span>
        </div>
        <div class="text-[10px] md:text-xs text-gray-500 flex items-center gap-1">
          <svg class="w-3 md:w-4 h-3 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          {{ project.views }}人实践
        </div>
      </div>
      <button class="px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-white border border-gray-900 text-gray-900 text-xs md:text-sm font-medium hover:bg-gray-50 transition-colors whitespace-nowrap">
        立即上车
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Project } from '@/types'

const props = defineProps<{
  project: Project
  isFeatured?: boolean
}>()

const priceRange = computed(() => {
  const match = props.project.revenue.match(/(\d+)-(\d+)/)
  return match ? `${match[1]}k~${match[2]}k` : '5k~20k'
})

const difficulty = computed(() => {
  return 1
})
</script>

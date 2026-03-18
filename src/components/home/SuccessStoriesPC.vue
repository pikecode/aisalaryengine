<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-6">

      <!-- Title -->
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-900">加入他们的成功之旅</h2>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-5 gap-4 mb-6">
        <div
          v-for="story in stories"
          :key="story.id"
          class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer"
        >
          <!-- Image -->
          <div class="w-full h-40 overflow-hidden">
            <img :src="story.image" :alt="story.name" class="w-full h-full object-cover" />
          </div>

          <!-- Content -->
          <div class="p-4">
            <!-- User Info -->
            <div class="flex items-center gap-2 mb-3">
              <img :src="story.avatar" :alt="story.name" class="w-8 h-8 rounded-full object-cover flex-shrink-0" />
              <div class="flex-1 min-w-0">
                <div class="text-sm font-semibold text-gray-900 truncate">{{ story.name }}</div>
                <div class="text-xs text-gray-500 truncate">{{ story.role }}</div>
              </div>
            </div>

            <!-- Tag -->
            <div class="inline-block px-3 py-1 bg-gray-100 rounded-lg text-xs text-gray-600 mb-2">
              {{ story.category }}
            </div>

            <!-- Description -->
            <p class="text-sm text-gray-600 leading-relaxed line-clamp-2">
              {{ story.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Load More -->
      <div class="text-center mt-8">
        <button class="text-gray-600 hover:text-gray-900 font-medium transition-colors text-base">
          加载更多...
        </button>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { stories } from '@/data/stories'
</script>

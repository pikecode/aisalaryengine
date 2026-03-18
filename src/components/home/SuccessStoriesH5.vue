<template>
  <section class="py-8 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4">

      <!-- Title -->
      <div class="text-center mb-6">
        <h2 class="text-2xl font-bold text-gray-900">加入他们的成功之旅</h2>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-2 gap-3 mb-6">
        <div
          v-for="story in visibleStories"
          :key="story.id"
          class="overflow-hidden"
          style="width: 166px; height: 199px; background: #FFFFFF; border-radius: 2px;"
        >
          <!-- Image -->
          <div class="w-full overflow-hidden" style="height: 96px;">
            <img :src="story.image" :alt="story.name" class="w-full h-full object-cover" />
          </div>

          <!-- Content -->
          <div class="px-3 pt-2 pb-3 flex flex-col gap-1.5">
            <!-- Avatar + Name -->
            <div class="flex items-center gap-1.5">
              <img :src="story.avatar" :alt="story.name" class="w-6 h-6 rounded-full object-cover flex-shrink-0" />
              <div class="truncate" style="font-family: PingFang SC; font-weight: 500; font-size: 13px; color: #000000; line-height: 13px;">{{ story.name }}</div>
            </div>

            <!-- Tag + Role -->
            <div class="flex items-center gap-1.5">
              <span class="px-1.5 py-0.5 flex-shrink-0" style="background: #E9EDFF; border-radius: 6px; font-family: PingFang SC; font-size: 10px; color: rgba(57,57,57,0.6); line-height: 10px;">{{ story.category }}</span>
              <span class="truncate" style="font-family: PingFang SC; font-weight: 400; font-size: 10px; color: rgba(57,57,57,0.6); line-height: 10px;">{{ story.role }}</span>
            </div>

            <!-- Description -->
            <p class="line-clamp-2" style="font-family: PingFang SC; font-weight: 400; font-size: 10px; color: #393939; line-height: 15px;">
              {{ story.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Load More -->
      <div v-if="hasMore" class="text-center mt-2">
        <button
          class="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm"
          @click="loadMore"
        >
          加载更多...
        </button>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { stories } from '@/data/stories'

const pageSize = 6
const visibleCount = ref(pageSize)

const visibleStories = computed(() => stories.slice(0, visibleCount.value))
const hasMore = computed(() => visibleCount.value < stories.length)

function loadMore() {
  visibleCount.value += pageSize
}
</script>

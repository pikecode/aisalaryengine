<template>
  <!-- Featured card: horizontal layout -->
  <div
    v-if="isFeatured"
    class="featured-card"
  >
    <div class="flex flex-row items-start gap-6 h-full">
      <!-- Left side: Badge + Content -->
      <div class="flex-1">
        <div class="flex items-start gap-3 mb-3">
          <!-- Cost Badge -->
          <div class="cost-badge">
            <span class="cost-number">0</span>
            <span class="cost-label">成本</span>
          </div>

          <!-- Title + Tags -->
          <div class="flex-1">
            <h3 class="card-title">
              {{ project.title }}
            </h3>

            <!-- Tags + Difficulty -->
            <div class="flex flex-wrap items-center gap-2">
              <span
                v-for="tag in project.tags.slice(0, 3)"
                :key="tag"
                class="project-tag"
              >
                {{ tag }}
              </span>

              <!-- Difficulty Stars -->
              <div class="flex items-center gap-1">
                <span class="difficulty-label">门槛：</span>
                <div class="flex items-center">
                  <svg v-for="i in 5" :key="i" class="star-icon" :class="i <= difficulty ? 'star-filled' : 'star-empty'" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Description -->
        <p class="card-description">
          {{ project.description }}
        </p>
      </div>

      <!-- Right side: Stats + Button -->
      <div class="flex flex-col items-end justify-between">
        <div class="text-right mb-4">
          <div class="potential-earning">
            <span class="potential-label">潜力：</span>
            <span class="potential-value">¥{{ priceRange }}/月</span>
          </div>
          <div class="practice-count">
            <svg class="practice-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            {{ project.views }}人实践
          </div>
        </div>
        <button class="action-button">
          立即上车
        </button>
      </div>
    </div>
  </div>

  <!-- Regular card: vertical layout -->
  <div
    v-else
    class="regular-card"
  >
    <!-- Badge + Title + Tags + Difficulty -->
    <div class="flex items-start gap-3 mb-3">
      <!-- Cost Badge -->
      <div class="cost-badge">
        <span class="cost-number">0</span>
        <span class="cost-label">成本</span>
      </div>

      <!-- Title + Tags + Difficulty -->
      <div class="flex-1">
        <h3 class="card-title">
          {{ project.title }}
        </h3>

        <!-- Tags + Difficulty -->
        <div class="flex flex-wrap items-center gap-2">
          <span
            v-for="tag in project.tags.slice(0, 3)"
            :key="tag"
            class="project-tag"
          >
            {{ tag }}
          </span>

          <!-- Difficulty Stars -->
          <div class="flex items-center gap-1">
            <span class="difficulty-label">门槛：</span>
            <div class="flex items-center">
              <svg v-for="i in 5" :key="i" class="star-icon" :class="i <= difficulty ? 'star-filled' : 'star-empty'" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Description -->
    <p class="card-description mb-4 flex-1">
      {{ project.description }}
    </p>

    <!-- Footer -->
    <div class="flex items-center justify-between pt-4 border-t border-gray-200">
      <div class="flex items-center gap-4">
        <div class="potential-earning">
          <span class="potential-label">潜力：</span>
          <span class="potential-value">¥{{ priceRange }}/月</span>
        </div>
        <div class="practice-count">
          <svg class="practice-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          {{ project.views }}人实践
        </div>
      </div>
      <button class="action-button">
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

<style scoped>
.featured-card {
  background: #FFFFFF;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  padding: 24px;
  transition: all 0.2s;
  cursor: pointer;
  height: 100%;
}

.featured-card:hover {
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.12);
}

.regular-card {
  background: #FFFFFF;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  padding: 24px;
  transition: all 0.2s;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.regular-card:hover {
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.12);
}

.cost-badge {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 8px;
  background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%);
  color: white;
  flex-shrink: 0;
}

.cost-number {
  font-size: 28px;
  font-weight: bold;
  line-height: 1;
}

.cost-label {
  font-size: 12px;
  font-weight: normal;
  margin-top: 2px;
}

.card-title {
  font-family: 'PingFang SC', sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 8px;
  line-height: 1.4;
}

.project-tag {
  font-size: 12px;
  padding: 4px 12px;
  border-radius: 6px;
  background: #F5F5F5;
  color: #666666;
}

.difficulty-label {
  font-size: 12px;
  color: #666666;
}

.star-icon {
  width: 14px;
  height: 14px;
}

.star-filled {
  color: #FFB800;
}

.star-empty {
  color: #E0E0E0;
}

.card-description {
  font-size: 14px;
  color: #666666;
  line-height: 1.6;
}

.potential-earning {
  font-size: 14px;
  margin-bottom: 8px;
}

.potential-label {
  color: #999999;
}

.potential-value {
  color: #333333;
  font-weight: 600;
}

.practice-count {
  font-size: 12px;
  color: #999999;
  display: flex;
  align-items: center;
  gap: 4px;
}

.practice-icon {
  width: 16px;
  height: 16px;
}

.action-button {
  padding: 10px 24px;
  border-radius: 8px;
  background: white;
  border: 1px solid #393939;
  color: #393939;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}

.action-button:hover {
  background: #f5f5f5;
}
</style>

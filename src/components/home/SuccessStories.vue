<template>
  <section class="py-12 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 md:px-6">

      <!-- Title -->
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-gray-900">加入他们的成功之旅</h2>
      </div>

      <!-- Horizontal Scroll Pills -->
      <div class="relative">
        <div class="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          <div
            v-for="user in users"
            :key="user.id"
            class="flex-shrink-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full pl-2 pr-6 py-2 flex items-center gap-3"
          >
            <!-- Avatar -->
            <div class="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
              <div
                class="w-full h-full flex items-center justify-center text-white text-lg font-bold"
                :class="user.bgColor"
              >
                {{ user.name[0] }}
              </div>
            </div>

            <!-- Text -->
            <div class="text-left">
              <div class="text-base font-semibold text-gray-900 whitespace-nowrap">
                {{ user.name }}
              </div>
              <div class="text-sm text-gray-600 whitespace-nowrap">
                {{ user.desc }}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const users = [
  { id: 1, name: '张一', desc: '签到了第一桶金', bgColor: 'bg-purple-500' },
  { id: 2, name: '张一', desc: '签到了第一桶金', bgColor: 'bg-purple-500' },
  { id: 3, name: '李明', desc: '项目极其详实', bgColor: 'bg-blue-500' },
  { id: 4, name: '王锐', desc: '项目极其详实', bgColor: 'bg-green-500' },
  { id: 5, name: '经理', desc: '签到了第一桶金', bgColor: 'bg-purple-500' },
  { id: 6, name: '艾德', desc: '项目极其详实', bgColor: 'bg-blue-500' },
  { id: 7, name: '吴总', desc: '项目极其详实', bgColor: 'bg-green-500' },
  { id: 8, name: '吴总', desc: '项目极其详实', bgColor: 'bg-green-500' }
]
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
</style>

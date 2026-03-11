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
  { id: 1, name: '李明', desc: '通过AI写作项目，月入2万+', bgColor: 'bg-blue-500' },
  { id: 2, name: '王芳', desc: '利用电商项目，实现财务自由', bgColor: 'bg-pink-500' },
  { id: 3, name: '张伟', desc: '自媒体创业，粉丝破10万', bgColor: 'bg-green-500' },
  { id: 4, name: '刘洋', desc: '知识付费课程，月收入5万+', bgColor: 'bg-orange-500' },
  { id: 5, name: '陈静', desc: 'AI工具开发，获得天使投资', bgColor: 'bg-purple-500' },
  { id: 6, name: '赵强', desc: '副业项目，月入1万+', bgColor: 'bg-indigo-500' },
  { id: 7, name: '孙丽', desc: '内容创作，打造个人IP', bgColor: 'bg-teal-500' },
  { id: 8, name: '周杰', desc: '技术咨询，年入50万+', bgColor: 'bg-cyan-500' }
]
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
</style>

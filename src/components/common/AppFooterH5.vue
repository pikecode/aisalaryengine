<template>
  <footer class="bg-white text-gray-600 pt-4 pb-6">
    <div class="max-w-7xl mx-auto px-4">

      <!-- Accordion link groups -->
      <div>
        <div v-for="group in linkGroups" :key="group.title" class="border-b border-gray-200">
          <button
            class="w-full flex items-center justify-between py-5 text-base font-medium text-gray-800"
            @click="toggle(group.title)"
          >
            {{ group.title }}
            <svg
              class="w-4 h-4 text-gray-500 transition-transform"
              :class="openGroup === group.title ? 'rotate-180' : ''"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div v-if="openGroup === group.title" class="pb-4 space-y-3">
            <a v-for="link in group.links" :key="link.label" href="#" class="block text-sm text-gray-500 hover:text-gray-900 transition-colors">
              {{ link.label }}
            </a>
          </div>
        </div>
      </div>

      <!-- Brand + Socials -->
      <div class="mt-8 mb-4 flex items-center gap-3 flex-wrap">
        <div class="flex items-center gap-2">
          <img src="@/assets/logo.png" alt="AI薪引擎" class="w-8 h-8" />
          <span style="font-family: Roboto; font-weight: bold; font-size: 16px; color: #393939;">AI薪引擎</span>
        </div>
        <div class="flex gap-2">
          <a v-for="s in socials" :key="s.label" href="#" :class="['w-9 h-9 rounded-lg flex items-center justify-center transition-colors border border-gray-200', s.bg]">
            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path :d="s.path"/></svg>
          </a>
        </div>
      </div>

      <!-- Description -->
      <p class="text-sm text-gray-500 leading-relaxed mb-6">抓住AI风口，迈出第一步。我们提供最专业的AI创业赋能工具与社区</p>

      <!-- Copyright -->
      <div class="text-center text-xs text-gray-400">
        <p>© 2025 AI薪引擎. 保留所有权利。| ICP备案号：京ICP备16415621号</p>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const openGroup = ref<string | null>(null)
const toggle = (title: string) => {
  openGroup.value = openGroup.value === title ? null : title
}

const socials = [
  { label: 'wechat', bg: 'bg-green-500 hover:bg-green-600', path: 'M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348z' },
  { label: 'weibo', bg: 'bg-orange-500 hover:bg-orange-600', path: 'M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02-.259-2.609 2.759-5.047 6.74-5.441 3.979-.394 7.413 1.404 7.671 4.018.259 2.6-2.759 5.049-6.739 5.443z' },
  { label: 'linkedin', bg: 'bg-blue-700 hover:bg-blue-800', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z' },
  { label: 'instagram', bg: 'bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z' },
]

const linkGroups = [
  { title: '关于', links: [{ label: '关于我们' }, { label: '联系我们' }, { label: '加入我们' }] },
  { title: '产品', links: [{ label: 'AI创业机会库' }, { label: 'AI项目工作台' }, { label: '社区中心' }, { label: '定价' }] },
  { title: '帮助', links: [{ label: '帮助中心' }, { label: '使用教程' }] },
  { title: '法律', links: [{ label: '服务条款' }, { label: '隐私政策' }, { label: '社区规则' }] },
]
</script>

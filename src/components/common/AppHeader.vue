<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
    <!-- Top bar -->
    <div class="max-w-7xl mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-2 font-bold text-lg text-blue-600">
        <div class="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center text-white text-sm font-bold">✦</div>
        <span>AI薪引擎</span>
      </RouterLink>

      <!-- PC Nav -->
      <nav class="hidden md:flex items-center gap-1">
        <RouterLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all"
          active-class="text-blue-600 bg-blue-50"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <!-- Right Actions -->
      <div class="flex items-center gap-2">
        <!-- Language switcher - mobile only -->
        <div class="md:hidden flex items-center bg-gray-100 rounded-full px-2 py-1 text-xs font-medium text-gray-600 gap-1">
          <span class="text-blue-600">中</span>
          <span class="text-gray-400">/</span>
          <span>En</span>
        </div>
        <!-- Icons -->
        <button class="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-gray-100 transition-colors text-gray-500">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button class="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-gray-100 transition-colors text-gray-500">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
        <button class="hidden md:block btn-secondary text-sm py-1.5 px-3">登录</button>
        <button class="btn-primary text-sm py-1.5 px-3">注册</button>
      </div>
    </div>

    <!-- Mobile horizontal nav tabs -->
    <div class="md:hidden border-t border-gray-100 overflow-x-auto scrollbar-hide">
      <div class="flex px-4 gap-1 py-1.5 min-w-max">
        <RouterLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all whitespace-nowrap"
          active-class="text-blue-600 bg-blue-50"
        >
          {{ item.label }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import type { NavItem } from '@/types'

const navItems: NavItem[] = [
  { label: 'AI创业机会库', path: '/projects' },
  { label: 'AI项目工作台', path: '/workshop' },
  { label: '社区中心', path: '/community' },
  { label: '定价与会员', path: '/membership' }
]
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
</style>

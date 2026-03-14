<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
    <!-- Top bar -->
    <div class="max-w-7xl mx-auto px-3 md:px-6 h-12 md:h-14 flex items-center justify-between">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-1.5 font-bold text-sm md:text-lg">
        <img src="@/assets/logo.png" alt="AI薪引擎" class="h-7 md:h-9 w-auto" />
        <span class="text-gray-900">AI薪引擎</span>
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
      <div class="flex items-center gap-1.5 md:gap-3">
        <!-- 打卡按钮 - PC only -->
        <button class="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all shadow-md">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="8" r="3" fill="currentColor"/>
            <path d="M12 14c-4 0-7 2-7 4v2h14v-2c0-2-3-4-7-4z" fill="currentColor"/>
          </svg>
          打卡
        </button>

        <!-- Language switcher -->
        <div class="flex items-center bg-white rounded-lg px-2 py-1 text-xs md:text-sm font-medium gap-1 border border-gray-200">
          <span class="text-gray-900">中</span>
          <span class="text-gray-400">/</span>
          <span class="text-gray-500">En</span>
        </div>

        <!-- Search Icon -->
        <button class="flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-lg hover:bg-gray-100 transition-colors text-gray-600">
          <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        <!-- Notification Icon with Badge -->
        <button class="relative flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-lg hover:bg-gray-100 transition-colors text-gray-600">
          <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span class="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">2</span>
        </button>

        <!-- Cart Icon with Badge -->
        <button class="relative flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-lg hover:bg-gray-100 transition-colors text-gray-600">
          <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span class="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">2</span>
        </button>

        <!-- Buttons -->
        <RouterLink to="/register" class="px-3 py-1.5 md:px-5 md:py-2 rounded-lg text-xs md:text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 transition-colors">
          注册
        </RouterLink>
        <RouterLink to="/login" class="px-3 py-1.5 md:px-5 md:py-2 rounded-lg text-xs md:text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 transition-colors">
          登录
        </RouterLink>
      </div>
    </div>

    <!-- Mobile horizontal nav tabs -->
    <div class="md:hidden border-t border-gray-100 overflow-x-auto scrollbar-hide">
      <div class="flex px-3 gap-1 py-2 min-w-max">
        <RouterLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all whitespace-nowrap btn-mobile"
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
  { label: '社群中心', path: '/community' },
  { label: '定价与会员', path: '/membership' }
]
</script>

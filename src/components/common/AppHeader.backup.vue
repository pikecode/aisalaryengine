<template>
  <header class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-gray-100" style="background-color: #EDEFF4;">
    <!-- Top spacer -->
    <div style="height: 30px;"></div>

    <!-- Main bar -->
    <div class="max-w-7xl mx-auto px-3 md:px-6 flex items-center justify-between" style="height: 74px;">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-1.5 flex-shrink-0">
        <img src="@/assets/logo.png" alt="AI薪引擎" class="w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex-shrink-0" />
        <span class="text-gray-900 whitespace-nowrap text-base md:text-[26px]" style="font-family: Roboto, sans-serif; font-weight: 700; line-height: 24px;">AI薪引擎</span>
      </RouterLink>

      <!-- PC Nav -->
      <nav class="hidden md:flex items-center gap-0.5">
        <RouterLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="px-2 py-2 rounded-lg font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all whitespace-nowrap"
          style="font-family: Roboto, sans-serif; font-weight: 400; font-size: 20px; line-height: 24px; text-align: center;"
          active-class="text-blue-600 bg-blue-50"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <!-- Right Actions -->
      <div class="flex items-center gap-1 md:gap-3">
        <!-- 打卡按钮 - PC only -->
        <button class="hidden md:flex items-center gap-2 px-4 font-medium transition-all shadow-md whitespace-nowrap" style="background: linear-gradient(94.7deg, #1427FF 0%, #A114FF 96.2%); height: 40px; width: 117px; color: white; font-size: 20px; border-radius: 10px;">
          打卡
          <img src="@/assets/checkin-icon.svg" alt="打卡" class="w-[50px] h-[50px]" />
        </button>

        <!-- Language switcher -->
        <div class="flex items-center bg-gray-100 overflow-hidden" style="border-radius: 8px;">
          <button class="flex items-center justify-center font-medium text-gray-900 text-xs md:text-sm" style="width: 32px; height: 28px; background-color: #E7EBF2;">
            中
          </button>
          <button class="flex items-center justify-center bg-white font-medium text-gray-900 hover:bg-gray-50 text-xs md:text-sm" style="width: 32px; height: 28px;">
            En
          </button>
        </div>

        <!-- Search Icon -->
        <button class="flex items-center justify-center w-7 h-7 md:w-9 md:h-9 rounded-lg hover:bg-gray-100 transition-colors text-gray-600">
          <svg class="w-3.5 h-3.5 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        <!-- Notification Icon with Badge -->
        <button class="relative flex items-center justify-center w-7 h-7 md:w-9 md:h-9 rounded-lg hover:bg-gray-100 transition-colors text-gray-600">
          <svg class="w-3.5 h-3.5 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span class="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 text-white text-[9px] rounded-full flex items-center justify-center">2</span>
        </button>

        <!-- Cart Icon with Badge -->
        <button class="relative flex items-center justify-center w-7 h-7 md:w-9 md:h-9 rounded-lg hover:bg-gray-100 transition-colors text-gray-600">
          <svg class="w-3.5 h-3.5 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span class="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 text-white text-[9px] rounded-full flex items-center justify-center">2</span>
        </button>

        <!-- Buttons -->
        <RouterLink to="/register" class="font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center text-xs md:text-sm" style="width: 54px; height: 30px; border-radius: 6px;">
          注册
        </RouterLink>
        <RouterLink to="/login" class="font-medium text-white bg-gray-900 hover:bg-gray-800 transition-colors flex items-center justify-center text-xs md:text-sm" style="width: 54px; height: 30px; border-radius: 6px;">
          登录
        </RouterLink>
      </div>
    </div>

    <!-- Mobile horizontal nav tabs -->
    <div class="md:hidden border-t border-gray-100 overflow-x-auto scrollbar-hide">
      <div class="flex px-3 gap-1 py-3 min-w-max">
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

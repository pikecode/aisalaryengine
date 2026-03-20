<template>
  <header class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-gray-100" style="background: rgba(255,255,255,0.5);">
    <div class="flex items-center h-[60px] px-8 gap-8">

      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-2 flex-shrink-0">
        <img src="@/assets/logo.png" alt="AI薪引擎" class="w-9 h-9" />
        <span style="font-family: Roboto; font-weight: bold; font-size: 26px; color: #393939; line-height: 24px; text-align: left;">AI薪引擎</span>
      </RouterLink>

      <!-- Nav -->
      <nav class="flex items-center gap-1 flex-1">
        <RouterLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="px-4 py-1.5 rounded-lg text-[#393939] hover:text-blue-600 hover:bg-blue-50 transition-all whitespace-nowrap"
          style="font-family: Roboto; font-weight: 400; font-size: 20px; line-height: 24px;"
          active-class="text-blue-600 bg-blue-50"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <!-- Right Actions -->
      <div class="flex items-center gap-3 flex-shrink-0">

        <!-- 打卡按钮 -->
        <button class="flex items-center gap-1 px-3 h-9 rounded-[10px] text-white font-medium text-sm whitespace-nowrap" style="background: linear-gradient(85deg, #1427FF 0%, #A114FF 100%); box-shadow: 0px 0px 8px 0px rgba(34,37,255,0.29);">
          打卡
          <img src="@/assets/checkin-icon.svg" alt="打卡" class="w-8 h-8" />
        </button>

        <!-- Language switcher -->
        <LanguageSwitcher :current-lang="currentLang" @change="handleLangChange" />

        <!-- Search -->
        <IconButton @click="handleSearch">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </IconButton>

        <!-- Notification -->
        <IconButton badge="2" @click="handleNotification">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </IconButton>

        <!-- Cart -->
        <IconButton badge="2" @click="handleCart">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </IconButton>

        <!-- Auth -->
        <RouterLink to="/register" class="flex items-center justify-center text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 transition-all px-4 h-8 rounded-lg">
          注册
        </RouterLink>
        <RouterLink to="/login" class="flex items-center justify-center text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 transition-all px-4 h-8 rounded-lg">
          登录
        </RouterLink>

      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import type { NavItem } from '@/types'
import LanguageSwitcher from './LanguageSwitcher.vue'
import IconButton from './IconButton.vue'

const router = useRouter()

const navItems: NavItem[] = [
  { label: 'AI创业机会库', path: '/projects' },
  { label: 'AI项目工作台', path: '/workshop' },
  { label: '社群中心', path: '/community' },
  { label: '定价与会员', path: '/membership' }
]

const currentLang = ref('zh')
const handleLangChange = (lang: string) => { currentLang.value = lang }
const handleSearch = () => {}
const handleNotification = () => { router.push('/messages') }
const handleCart = () => {}
</script>

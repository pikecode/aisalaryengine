<template>
  <header class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-gray-100" style="background: rgba(255,255,255,0.5);">
    <!-- Main bar -->
    <div class="px-4 h-[54px] flex items-center justify-between">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-2 flex-shrink-0">
        <img src="@/assets/logo.png" alt="AI薪引擎" class="w-8 h-8" />
        <span style="font-family: Roboto; font-weight: bold; font-size: 16px; color: #393939; line-height: 24px;">AI薪引擎</span>
      </RouterLink>

      <!-- Right Actions -->
      <div class="flex items-center gap-3">
        <!-- 未登录 -->
        <span class="text-sm text-gray-400">未登录</span>

        <!-- 打卡 -->
        <button class="flex items-center gap-1 px-2 h-7 rounded-[6px] text-white whitespace-nowrap" style="background: linear-gradient(85deg, #1427FF 0%, #A114FF 100%); box-shadow: 0px 0px 8px 0px rgba(34,37,255,0.29); font-size: 10px;" @click="checkinOpen = true">
          打卡
          <img src="@/assets/checkin-icon.svg" alt="打卡" class="w-5 h-5" />
        </button>

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
        <IconButton @click="handleCart">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </IconButton>

        <!-- Menu -->
        <IconButton @click="menuOpen = true">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </IconButton>
      </div>
    </div>
  </header>

  <!-- Drawer overlay -->
  <Transition name="fade">
    <div v-if="menuOpen" class="fixed inset-0 z-[60] bg-black/40" @click="menuOpen = false" />
  </Transition>

  <!-- Drawer panel -->
  <Transition name="slide-right">
    <div v-if="menuOpen" class="fixed top-0 left-0 bottom-0 z-[70] w-[280px] bg-white shadow-xl flex flex-col">
      <!-- Drawer header -->
      <div class="flex items-center justify-between px-4 h-[54px] border-b border-gray-100">
        <RouterLink to="/" class="flex items-center gap-2" @click="menuOpen = false">
          <img src="@/assets/logo.png" alt="AI薪引擎" class="w-8 h-8" />
          <span style="font-family: Roboto; font-weight: bold; font-size: 16px; color: #393939;">AI薪引擎</span>
        </RouterLink>
        <div class="flex items-center gap-2">
          <LanguageSwitcher :current-lang="currentLang" @change="handleLangChange" />
          <button class="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-900" @click="menuOpen = false">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Nav items -->
      <nav class="flex-1 overflow-y-auto">
        <RouterLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="flex items-center px-6 h-14 text-base text-gray-800 border-b border-gray-100 hover:bg-gray-50 transition-all"
          active-class="text-blue-600"
          @click="menuOpen = false"
        >
          {{ item.label }}
        </RouterLink>
        <RouterLink
          to="/recommend"
          class="flex items-center px-6 h-14 text-base text-gray-800 border-b border-gray-100 hover:bg-gray-50 transition-all"
          @click="menuOpen = false"
        >
          为您推荐
        </RouterLink>
        <RouterLink
          to="/login"
          class="flex items-center px-6 h-14 text-base text-gray-800 border-b border-gray-100 hover:bg-gray-50 transition-all"
          @click="menuOpen = false"
        >
          登录/注册
        </RouterLink>
      </nav>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import type { NavItem } from '@/types'
import LanguageSwitcher from './LanguageSwitcher.vue'
import IconButton from './IconButton.vue'

const checkinOpen = defineModel<boolean>('checkinOpen', { default: false })
const navItems: NavItem[] = [
  { label: 'AI创业机会库', path: '/projects' },
  { label: 'AI项目工作台', path: '/workshop' },
  { label: '社群中心', path: '/community' },
  { label: '定价与会员', path: '/membership' }
]

const router = useRouter()

const currentLang = ref('zh')
const menuOpen = ref(false)
const handleLangChange = (lang: string) => { currentLang.value = lang }
const handleSearch = () => {}
const handleNotification = () => { router.push('/messages') }
const handleCart = () => {}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.slide-right-enter-active, .slide-right-leave-active { transition: transform 0.25s ease; }
.slide-right-enter-from, .slide-right-leave-to { transform: translateX(-100%); }
</style>

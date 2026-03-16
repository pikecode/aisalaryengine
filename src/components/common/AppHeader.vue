<template>
  <header class="header-container">
    <!-- Top spacer -->
    <div class="header-spacer"></div>

    <!-- Main bar -->
    <div class="header-main">
      <!-- Logo -->
      <RouterLink to="/" class="logo-section">
        <img src="@/assets/logo.png" alt="AI薪引擎" class="logo-image" />
        <span class="brand-text">AI薪引擎</span>
      </RouterLink>

      <!-- PC Nav -->
      <nav class="nav-desktop">
        <RouterLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="nav-link"
          active-class="nav-link-active"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <!-- Right Actions -->
      <div class="actions-container">
        <!-- 打卡按钮 - PC only -->
        <button class="checkin-button">
          打卡
          <img src="@/assets/checkin-icon.svg" alt="打卡" class="checkin-icon" />
        </button>

        <!-- Language switcher -->
        <LanguageSwitcher :current-lang="currentLang" @change="handleLangChange" />

        <!-- Search Icon -->
        <IconButton @click="handleSearch">
          <svg class="icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </IconButton>

        <!-- Notification Icon with Badge -->
        <IconButton badge="2" @click="handleNotification">
          <svg class="icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </IconButton>

        <!-- Cart Icon with Badge -->
        <IconButton badge="2" @click="handleCart">
          <svg class="icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </IconButton>

        <!-- Auth Buttons -->
        <RouterLink to="/register" class="auth-button auth-button-register">
          注册
        </RouterLink>
        <RouterLink to="/login" class="auth-button auth-button-login">
          登录
        </RouterLink>
      </div>
    </div>

    <!-- Mobile horizontal nav tabs -->
    <div class="nav-mobile-container">
      <div class="nav-mobile-scroll">
        <RouterLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="nav-mobile-link"
          active-class="nav-mobile-link-active"
        >
          {{ item.label }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { NavItem } from '@/types'
import LanguageSwitcher from './LanguageSwitcher.vue'
import IconButton from './IconButton.vue'

const navItems: NavItem[] = [
  { label: 'AI创业机会库', path: '/projects' },
  { label: 'AI项目工作台', path: '/workshop' },
  { label: '社群中心', path: '/community' },
  { label: '定价与会员', path: '/membership' }
]

const currentLang = ref('zh')

const handleLangChange = (lang: string) => {
  currentLang.value = lang
  console.log('Language changed to:', lang)
}

const handleSearch = () => {
  console.log('Search clicked')
}

const handleNotification = () => {
  console.log('Notification clicked')
}

const handleCart = () => {
  console.log('Cart clicked')
}
</script>

<style scoped>
/* Header Container */
.header-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background-color: #EDEFF4;
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #e5e7eb;
}

.header-spacer {
  height: 30px;
}

.header-main {
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 0.75rem;
  height: 74px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media (min-width: 768px) {
  .header-main {
    padding: 0 1.5rem;
  }
}

/* Logo Section */
.logo-section {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  flex-shrink: 0;
}

.logo-image {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
}

@media (min-width: 768px) {
  .logo-image {
    width: 60px;
    height: 60px;
  }
}

.brand-text {
  color: #393939;
  white-space: nowrap;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  line-height: 24px;
  font-size: 1rem;
  text-align: left;
  width: 104px;
  height: 24px;
}

@media (min-width: 768px) {
  .brand-text {
    font-size: 26px;
  }
}

/* Desktop Navigation */
.nav-desktop {
  display: none;
  align-items: center;
  gap: 0.125rem;
}

@media (min-width: 768px) {
  .nav-desktop {
    display: flex;
  }
}

.nav-link {
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-weight: 400;
  color: #393939;
  transition: all 0.2s;
  white-space: nowrap;
  font-family: Roboto, sans-serif;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  width: 124px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-link:hover {
  color: #2563eb;
  background-color: #eff6ff;
}

.nav-link-active {
  color: #2563eb;
  background-color: #eff6ff;
}

/* Actions Container */
.actions-container {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

@media (min-width: 768px) {
  .actions-container {
    gap: 0.75rem;
  }
}

/* Checkin Button */
.checkin-button {
  display: none;
  align-items: center;
  gap: 0.5rem;
  padding: 0 1rem;
  font-weight: 500;
  transition: all 0.2s;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  background: linear-gradient(94.7deg, #1427FF 0%, #A114FF 96.2%);
  height: 40px;
  width: 117px;
  color: white;
  font-size: 20px;
  border-radius: 10px;
}

@media (min-width: 768px) {
  .checkin-button {
    display: flex;
  }
}

.checkin-icon {
  width: 50px;
  height: 50px;
}

/* Icon SVG */
.icon-svg {
  width: 0.875rem;
  height: 0.875rem;
}

@media (min-width: 768px) {
  .icon-svg {
    width: 1.25rem;
    height: 1.25rem;
  }
}

/* Auth Buttons */
.auth-button {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  transition: all 0.2s;
  width: 54px;
  height: 30px;
  border-radius: 6px;
  font-size: 0.75rem;
}

@media (min-width: 768px) {
  .auth-button {
    width: 66px;
    height: 36px;
    border-radius: 8px;
    font-size: 0.875rem;
  }
}

.auth-button-register {
  color: #374151;
  background-color: white;
  border: 1px solid #d1d5db;
}

.auth-button-register:hover {
  background-color: #f9fafb;
}

.auth-button-login {
  color: white;
  background-color: #111827;
}

.auth-button-login:hover {
  background-color: #1f2937;
}

/* Mobile Navigation */
.nav-mobile-container {
  display: block;
  border-top: 1px solid #e5e7eb;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.nav-mobile-container::-webkit-scrollbar {
  display: none;
}

@media (min-width: 768px) {
  .nav-mobile-container {
    display: none;
  }
}

.nav-mobile-scroll {
  display: flex;
  padding: 0.75rem 0.75rem;
  gap: 0.25rem;
  min-width: max-content;
}

.nav-mobile-link {
  flex-shrink: 0;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  color: #4b5563;
  transition: all 0.2s;
  white-space: nowrap;
  min-height: 44px;
  min-width: 44px;
  display: flex;
  align-items: center;
}

.nav-mobile-link:hover {
  color: #2563eb;
  background-color: #eff6ff;
}

.nav-mobile-link-active {
  color: #2563eb;
  background-color: #eff6ff;
}

.nav-mobile-link:active {
  transform: scale(0.95);
}
</style>

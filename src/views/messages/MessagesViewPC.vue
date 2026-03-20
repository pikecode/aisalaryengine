<template>
  <div class="flex">
    <!-- Left Sidebar -->
    <div class="w-[240px] bg-white border-r border-gray-200 flex flex-col fixed top-[60px] bottom-0">
      <!-- Left Sidebar -->
      <div class="w-[240px] bg-white border-r border-gray-200 flex flex-col">
        <!-- Logo -->
        <div class="px-5 py-4 border-b border-gray-100">
          <RouterLink to="/" class="flex items-center gap-2">
            <img src="@/assets/logo.png" alt="AI薪引擎" class="w-8 h-8" />
            <span style="font-family:'Roboto',Roboto;font-weight:bold;font-size:20px;color:#393939;">AI薪引擎</span>
          </RouterLink>
        </div>

        <!-- Menu -->
        <nav class="flex-1 py-4">
          <div class="px-4 mb-2">
            <span style="font-family:'Source Han Sans CN',sans-serif;font-weight:500;font-size:12px;color:#999999;">消息中心</span>
          </div>
          <button
            v-for="item in menuItems"
            :key="item.id"
            @click="activeMenu = item.id"
            class="w-full px-5 py-3 text-left flex items-center gap-3 transition-all menu-item"
            :class="{ 'menu-active': activeMenu === item.id, 'menu-inactive': activeMenu !== item.id }"
          >
            <component :is="item.icon" class="w-5 h-5" />
            <span>{{ item.label }}</span>
          </button>
        </nav>

        <!-- Customer Service Time -->
        <div class="p-4 border-t border-gray-100">
          <div class="flex items-center gap-2 text-gray-400">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span style="font-family:'Source Han Sans CN',sans-serif;font-weight:400;font-size:12px;">客服时间 9:00-21:00</span>
          </div>
        </div>
      </div>

      <!-- Right Content -->
      <div class="flex-1 flex flex-col bg-gray-50 ml-[240px]">
        <!-- Header -->
        <div class="bg-white border-b border-gray-200 px-6 py-4">
          <div class="flex items-center justify-between">
            <h1 style="font-family:'Source Han Sans CN',sans-serif;font-weight:500;font-size:20px;color:#393939;">消息中心</h1>
            <button style="font-family:'Source Han Sans CN',sans-serif;font-weight:400;font-size:14px;color:#1427FF;">全部已读</button>
          </div>
        </div>

        <!-- Search -->
        <div class="px-6 py-4">
          <div class="relative max-w-md">
            <input
              type="text"
              placeholder="搜索消息"
              class="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg outline-none"
              style="font-family:'Source Han Sans CN',sans-serif;font-weight:400;font-size:14px;color:#393939;"
            />
            <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>
        </div>

        <!-- Tab -->
        <div class="px-6">
          <div class="flex gap-6 border-b border-gray-200">
            <button
              v-for="tab in tabs"
              :key="tab.id"
              @click="activeTab = tab.id"
              class="pb-3 transition-all tab-pc"
              :class="activeTab === tab.id ? 'tab-pc-active' : 'tab-pc-inactive'"
            >
              {{ tab.label }}
            </button>
          </div>
        </div>

        <!-- Message List -->
        <div class="flex-1 overflow-y-auto px-6 py-4">
          <div class="space-y-3">
            <div
              v-for="msg in messages"
              :key="msg.id"
              class="flex items-center gap-4 p-4 bg-white rounded-lg cursor-pointer hover:shadow-sm transition-shadow"
            >
              <!-- Avatar -->
              <div class="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" :style="'background:' + msg.avatarBg">
                <span class="text-white font-medium">{{ msg.avatarText }}</span>
              </div>

              <!-- Content -->
              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between mb-1">
                  <span style="font-family:'Source Han Sans CN',sans-serif;font-weight:500;font-size:14px;color:#393939;">{{ msg.title }}</span>
                  <span style="font-family:'Source Han Sans CN',sans-serif;font-weight:400;font-size:12px;color:#999999;">{{ msg.time }}</span>
                </div>
                <p style="font-family:'Source Han Sans CN',sans-serif;font-weight:400;font-size:13px;color:#666666;" class="truncate">{{ msg.content }}</p>
              </div>

              <!-- Unread Badge -->
              <div v-if="msg.unread > 0" class="flex-shrink-0">
                <span class="w-5 h-5 flex items-center justify-center bg-red-500 text-white text-xs rounded-full">{{ msg.unread }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'

// Icons as functional components
const SystemIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' })
])

const MessageIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' })
])

const InteractIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' })
])

const ServiceIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z' })
])

const menuItems = [
  { id: 'system', label: '系统通知', icon: SystemIcon },
  { id: 'message', label: '我的消息', icon: MessageIcon },
  { id: 'interact', label: '互动消息', icon: InteractIcon },
  { id: 'service', label: '客服消息', icon: ServiceIcon }
]

const tabs = [
  { id: 'notify', label: '通知' },
  { id: 'private', label: '私信' }
]

const messages = [
  { id: 1, title: '系统升级通知', content: '尊敬的用户，系统将于今晚22:00-23:00进行升级维护，届时部分功能可能无法使用，请提前做好准备。', time: '10:30', unread: 2, avatarBg: '#1427FF', avatarText: '系' },
  { id: 2, title: '会员权益已发放', content: '您本月的会员权益已发放完成，请前往查看', time: '昨天', unread: 1, avatarBg: '#A114FF', avatarText: '会' },
  { id: 3, title: '订单已完成', content: '您的订单 #12345 已完成支付，详情请查看', time: '昨天', unread: 0, avatarBg: '#00C48C', avatarText: '订' },
  { id: 4, title: '新功能上线', content: 'AI项目工作台新功能已上线，欢迎体验', time: '3天前', unread: 0, avatarBg: '#FF9F43', avatarText: '新' }
]

const activeMenu = ref('system')
const activeTab = ref('notify')
</script>

<style scoped>
.menu-active {
  background: #eff6ff;
  color: #1427FF;
}
.menu-inactive {
  background: transparent;
  color: #393939;
}
.menu-item span {
  font-family: 'Source Han Sans CN', sans-serif;
  font-weight: 400;
  font-size: 14px;
}
.tab-pc {
  font-family: 'Source Han Sans CN', sans-serif;
  font-weight: 400;
  font-size: 14px;
}
.tab-pc-active {
  font-weight: 500;
  color: #1427FF;
  border-bottom: 2px solid #1427FF;
}
.tab-pc-inactive {
  color: #666666;
}
</style>

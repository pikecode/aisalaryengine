<template>
  <div class="flex">
    <!-- Main Content -->
    <div class="flex-1">
      <!-- Top Bar -->
      <div class="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <!-- Search -->
        <div class="relative flex-1 max-w-md">
          <input
            type="text"
            placeholder="搜索消息"
            class="w-full pl-10 pr-4 py-2 bg-gray-100 border-none rounded-lg outline-none"
            style="font-family:'Source Han Sans CN',sans-serif;font-weight:400;font-size:14px;color:#393939;"
          />
          <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </div>
        <!-- All Read -->
        <button class="ml-4" style="font-family:'Source Han Sans CN',sans-serif;font-weight:400;font-size:14px;color:#1427FF;">全部已读</button>
      </div>

      <!-- Tab -->
      <div class="bg-white px-6">
        <div class="flex gap-8">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            class="py-3 transition-all"
            :class="activeTab === tab.id ? 'tab-active' : 'tab-inactive'"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>

      <!-- Message List -->
      <div class="bg-gray-50 px-6 py-4">
        <div class="bg-white rounded-lg overflow-hidden">
          <div
            v-for="msg in messages"
            :key="msg.id"
            class="flex items-center px-4 py-4 cursor-pointer hover:bg-gray-50"
            :class="msg.unread > 0 ? 'border-l-4 border-l-blue' : ''"
          >
            <!-- Avatar -->
            <div class="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4" :style="'background:' + msg.avatarBg">
              <span class="text-white font-medium">{{ msg.avatarText }}</span>
            </div>

            <!-- Content -->
            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between mb-1">
                <div class="flex items-center gap-2">
                  <span style="font-family:'Source Han Sans CN',sans-serif;font-weight:500;font-size:14px;color:#393939;">{{ msg.title }}</span>
                  <span v-if="msg.unread > 0" class="w-2 h-2 rounded-full" style="background:#1427FF;"></span>
                </div>
                <span style="font-family:'Source Han Sans CN',sans-serif;font-weight:400;font-size:12px;color:#999999;">{{ msg.time }}</span>
              </div>
              <p style="font-family:'Source Han Sans CN',sans-serif;font-weight:400;font-size:13px;color:#666666;" class="truncate">{{ msg.content }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="px-6 py-4 flex justify-center">
        <div class="flex items-center gap-2">
          <button class="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <button class="w-8 h-8 flex items-center justify-center rounded text-sm" style="background:#1427FF;color:white;">1</button>
          <button class="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

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

const activeTab = ref('notify')
</script>

<style scoped>
.tab-active {
  font-family: 'Source Han Sans CN', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #1427FF;
  border-bottom: 2px solid #1427FF;
}
.tab-inactive {
  font-family: 'Source Han Sans CN', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #999999;
}
.border-l-blue {
  border-left-color: #1427FF;
}
</style>

<style scoped>
.border-l-color {
  border-left-color: #1427FF;
}
</style>

<template>
  <div class="flex min-h-screen bg-gray-50">
    <!-- Main Content -->
    <div class="flex-1">
      <!-- Top Bar -->
      <div class="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <h1 class="text-xl" style="font-family:'Source Han Sans CN',sans-serif;font-weight:500;color:#393939;">消息</h1>
        <button style="font-family:'Source Han Sans CN',sans-serif;font-weight:400;font-size:14px;color:#1427FF;">全部已读</button>
      </div>

      <!-- Search -->
      <div class="px-6 py-3 bg-white">
        <div class="relative">
          <input
            type="text"
            placeholder="搜索"
            class="w-full pl-10 pr-4 py-2.5 rounded-lg outline-none"
            style="background:#F2F2F2;font-family:'Source Han Sans CN',sans-serif;font-weight:400;font-size:14px;color:#393939;"
          />
          <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </div>
      </div>

      <!-- Tab -->
      <div class="bg-white px-6 border-b border-gray-100">
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
      <div class="py-2">
        <div
          v-for="msg in messages"
          :key="msg.id"
          class="flex items-center px-6 py-4 bg-white cursor-pointer hover:bg-gray-50 border-b border-gray-100"
        >
          <!-- Avatar -->
          <div class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mr-3" :style="'background:' + msg.avatarBg">
            <span class="text-white text-sm font-medium">{{ msg.avatarText }}</span>
          </div>

          <!-- Content -->
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between mb-1">
              <span style="font-family:'Source Han Sans CN',sans-serif;font-weight:400;font-size:14px;color:#393939;">{{ msg.title }}</span>
              <span style="font-family:'Source Han Sans CN',sans-serif;font-weight:400;font-size:12px;color:#999999;">{{ msg.time }}</span>
            </div>
            <p style="font-family:'Source Han Sans CN',sans-serif;font-weight:400;font-size:13px;color:#999999;" class="truncate">{{ msg.content }}</p>
          </div>

          <!-- Unread Dot -->
          <div v-if="msg.unread > 0" class="flex-shrink-0 ml-3">
            <span class="w-2 h-2 rounded-full" style="background:#1427FF;"></span>
          </div>
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
  { id: 1, title: '系统升级通知', content: '尊敬的用户，系统将于今晚22:00-23:00进行升级维护，届时部分功能可能无法使用，请提前做好准备。', time: '10:30', unread: 1, avatarBg: '#CCCCCC', avatarText: '系' },
  { id: 2, title: '活动提醒', content: '本周五有新的AI创业分享活动，欢迎参加', time: '昨天', unread: 1, avatarBg: '#CCCCCC', avatarText: '活' },
  { id: 3, title: '会员权益已发放', content: '您本月的会员权益已发放完成，请前往查看', time: '昨天', unread: 0, avatarBg: '#CCCCCC', avatarText: '会' },
  { id: 4, title: '订单已完成', content: '您的订单 #12345 已完成支付，详情请查看', time: '昨天', unread: 0, avatarBg: '#CCCCCC', avatarText: '订' },
  { id: 5, title: '新功能上线', content: 'AI项目工作台新功能已上线，欢迎体验', time: '3天前', unread: 0, avatarBg: '#CCCCCC', avatarText: '新' }
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
</style>

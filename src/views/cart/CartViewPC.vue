<template>
  <!-- Page background -->
  <div class="min-h-screen pt-[60px]" style="background: #F6F7FA;">
    <div class="max-w-[1100px] mx-auto px-4 py-8">

      <!-- Tab Bar -->
      <div class="bg-white px-6 mb-4" style="box-shadow: 0px 2px 20px 0px rgba(0,0,0,0.1); border-radius: 8px;">
        <div class="flex gap-8">
          <button
            v-for="tab in tabs"
            :key="tab.value"
            @click="activeTab = tab.value"
            class="py-4 text-sm transition-all border-b-2"
            :class="activeTab === tab.value
              ? 'border-[#333333] font-medium'
              : 'border-transparent font-normal'"
            :style="activeTab === tab.value
              ? 'font-family:Inter,Inter;font-weight:bold;font-size:20px;color:#333333;line-height:32px;'
              : 'font-family:Inter,Inter;font-weight:400;font-size:20px;color:rgba(51,51,51,0.7);line-height:32px;'"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>

      <!-- Toolbar -->
      <div class="flex items-center justify-between mb-4">
        <!-- Left: select-all + delete -->
        <div class="flex items-center gap-3">
          <label class="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              :checked="isAllSelected"
              :indeterminate="isIndeterminate"
              @change="toggleSelectAll"
              class="w-4 h-4 rounded accent-[#1427FF] cursor-pointer"
            />
            <span style="font-family:PingFang SC,PingFang SC;font-weight:500;font-size:18px;color:#333333;line-height:18px;">全选</span>
          </label>
          <button
            @click="deleteSelected"
            :disabled="selectedIds.size === 0"
            class="flex items-center justify-center transition-all"
            :style="selectedIds.size > 0
              ? 'width:68px;height:38px;border-radius:10px;border:1px solid rgba(51,51,51,0.1);font-family:PingFang SC,PingFang SC;font-weight:500;font-size:18px;color:#333333;line-height:18px;background:#fff;'
              : 'width:68px;height:38px;border-radius:10px;border:1px solid transparent;font-family:PingFang SC,PingFang SC;font-weight:500;font-size:18px;color:#bbbbbb;line-height:18px;background:#f3f4f6;cursor:not-allowed;'"
          >
            删除
          </button>
        </div>

        <!-- Right: search -->
        <div class="relative">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="搜索商品"
            class="outline-none"
            style="width:252px;height:40px;border-radius:4px;border:1px solid rgba(0,0,0,0.1);font-family:PingFang SC,PingFang SC;font-weight:500;font-size:18px;color:#999999;line-height:18px;padding:0 40px 0 16px;background:#fff;"
          />
          <svg class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </div>
      </div>

      <!-- Divider line below toolbar -->
      <div style="border-top:1px solid rgba(0,0,0,0.1);margin-top:22px;margin-bottom:20px;"></div>

      <!-- Cart Items -->
      <div class="flex flex-col gap-3">
        <div
          v-for="item in filteredItems"
          :key="item.id"
          class="bg-white px-6 py-5 flex items-center"
          style="border-radius:20px;"
        >
          <!-- Checkbox -->
          <input
            type="checkbox"
            :checked="selectedIds.has(item.id)"
            @change="toggleSelect(item.id)"
            class="cursor-pointer flex-shrink-0"
            style="width:20px;height:20px;border-radius:6px;border:1px solid rgba(0,0,0,0.5);"
          />

          <!-- Name + Tag -->
          <div class="flex flex-col flex-1 min-w-0" style="margin-left:19px;">
            <span style="font-family:PingFang SC,PingFang SC;font-weight:bold;font-size:26px;color:#333333;line-height:26px;">
              {{ item.name }}
            </span>
            <span
              class="inline-flex items-center px-2 py-1 w-fit"
              style="margin-top:11px;background:rgba(20,39,255,0.1);border-radius:4px;font-family:PingFang SC,PingFang SC;font-weight:500;font-size:18px;color:#1427FF;line-height:18px;"
            >
              {{ item.tag }}
            </span>
          </div>

          <!-- Price -->
          <span class="text-center flex-shrink-0" style="width:160px;font-family:PingFang SC,PingFang SC;font-weight:bold;font-size:24px;color:#FF1818;line-height:24px;">
            ¥ {{ item.price.toFixed(2) }}
          </span>

          <!-- Status -->
          <span class="text-center flex-shrink-0" style="width:120px;" :style="statusStyle(item.status)">
            {{ statusLabel(item.status) }}
          </span>

          <!-- Remove -->
          <button
            @click="removeItem(item.id)"
            class="flex-shrink-0 transition-colors hover:text-gray-600"
            style="width:80px;font-family:PingFang SC,PingFang SC;font-weight:500;font-size:20px;color:#666666;line-height:20px;"
          >
            移除
          </button>
        </div>

        <!-- Empty state -->
        <div v-if="filteredItems.length === 0" class="bg-white rounded-xl px-6 py-16 text-center" style="box-shadow: 0 1px 4px rgba(0,0,0,0.06);">
          <span style="font-family:'Source Han Sans CN',sans-serif;font-weight:400;font-size:14px;color:#999999;">暂无商品</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { mockCartItems, type CartItem, type CartStatus } from '@/data/cart'

const tabs = [
  { label: '全部', value: 'all' },
  { label: '待支付', value: 'pending' },
  { label: '已支付', value: 'paid' },
  { label: '已完成', value: 'completed' }
]

const activeTab = ref<'all' | CartStatus>('all')
const searchQuery = ref('')
const items = ref<CartItem[]>([...mockCartItems])
const selectedIds = ref<Set<string>>(new Set())

const tabFilteredItems = computed(() =>
  activeTab.value === 'all'
    ? items.value
    : items.value.filter(i => i.status === activeTab.value)
)

const filteredItems = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  if (!q) return tabFilteredItems.value
  return tabFilteredItems.value.filter(i => i.name.toLowerCase().includes(q))
})

const isAllSelected = computed(() =>
  filteredItems.value.length > 0 && filteredItems.value.every(i => selectedIds.value.has(i.id))
)

const isIndeterminate = computed(() =>
  filteredItems.value.some(i => selectedIds.value.has(i.id)) && !isAllSelected.value
)

function toggleSelectAll() {
  if (isAllSelected.value) {
    filteredItems.value.forEach(i => selectedIds.value.delete(i.id))
  } else {
    filteredItems.value.forEach(i => selectedIds.value.add(i.id))
  }
}

function toggleSelect(id: string) {
  if (selectedIds.value.has(id)) {
    selectedIds.value.delete(id)
  } else {
    selectedIds.value.add(id)
  }
}

function removeItem(id: string) {
  items.value = items.value.filter(i => i.id !== id)
  selectedIds.value.delete(id)
}

function deleteSelected() {
  items.value = items.value.filter(i => !selectedIds.value.has(i.id))
  selectedIds.value.clear()
}

function statusLabel(status: CartStatus): string {
  return { pending: '待支付', paid: '已支付', completed: '已完成' }[status]
}

function statusStyle(status: CartStatus): string {
  const base = "font-family:PingFang SC,PingFang SC;font-weight:500;font-size:20px;line-height:20px;"
  if (status === 'pending') return base + 'color:#FF1818;'
  if (status === 'paid') return base + 'color:#1427FF;'
  return base + 'color:#999999;'
}
</script>

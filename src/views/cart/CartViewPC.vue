<template>
  <!-- Page background -->
  <div class="min-h-screen pt-[60px]" style="background: #F6F7FA;">
    <div class="max-w-[1100px] mx-auto px-4 py-8">

      <!-- Tab Bar -->
      <div class="bg-white rounded-xl px-6 mb-4" style="box-shadow: 0 1px 4px rgba(0,0,0,0.06);">
        <div class="flex gap-8">
          <button
            v-for="tab in tabs"
            :key="tab.value"
            @click="activeTab = tab.value"
            class="py-4 text-sm transition-all border-b-2"
            :class="activeTab === tab.value
              ? 'border-[#1427FF] font-medium'
              : 'border-transparent font-normal'"
            :style="activeTab === tab.value
              ? 'color:#1427FF; font-family:\'Source Han Sans CN\',sans-serif;'
              : 'color:#393939; font-family:\'Source Han Sans CN\',sans-serif;'"
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
            <span style="font-family:'Source Han Sans CN',sans-serif;font-weight:400;font-size:14px;color:#393939;">全选</span>
          </label>
          <button
            @click="deleteSelected"
            :disabled="selectedIds.size === 0"
            class="px-3 py-1 rounded text-sm transition-all"
            :style="selectedIds.size > 0
              ? 'color:#393939;background:#fff;border:1px solid #d1d5db;font-family:\'Source Han Sans CN\',sans-serif;'
              : 'color:#bbbbbb;background:#f3f4f6;border:1px solid transparent;font-family:\'Source Han Sans CN\',sans-serif;cursor:not-allowed;'"
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
            class="pl-4 pr-10 py-2 rounded-lg outline-none text-sm w-52"
            style="background:#F2F2F2;font-family:'Source Han Sans CN',sans-serif;color:#393939;"
          />
          <svg class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </div>
      </div>

      <!-- Cart Items -->
      <div class="flex flex-col gap-3">
        <div
          v-for="item in filteredItems"
          :key="item.id"
          class="bg-white rounded-xl px-6 py-5 flex items-center gap-4"
          style="box-shadow: 0 1px 4px rgba(0,0,0,0.06);"
        >
          <!-- Checkbox -->
          <input
            type="checkbox"
            :checked="selectedIds.has(item.id)"
            @change="toggleSelect(item.id)"
            class="w-4 h-4 rounded accent-[#1427FF] cursor-pointer flex-shrink-0"
          />

          <!-- Name + Tag -->
          <div class="flex flex-col gap-1.5 flex-1 min-w-0">
            <span style="font-family:'Source Han Sans CN',sans-serif;font-weight:500;font-size:15px;color:#393939;">
              {{ item.name }}
            </span>
            <span
              class="inline-flex items-center px-2 py-0.5 rounded text-xs w-fit"
              style="background:#EBF3FF;color:#1427FF;font-family:'Source Han Sans CN',sans-serif;"
            >
              {{ item.tag }}
            </span>
          </div>

          <!-- Price -->
          <span class="w-32 text-center flex-shrink-0" style="font-family:'Source Han Sans CN',sans-serif;font-weight:500;font-size:16px;color:#F04F44;">
            ¥ {{ item.price.toFixed(2) }}
          </span>

          <!-- Status -->
          <span class="w-20 text-center flex-shrink-0 text-sm" :style="statusStyle(item.status)">
            {{ statusLabel(item.status) }}
          </span>

          <!-- Remove -->
          <button
            @click="removeItem(item.id)"
            class="flex-shrink-0 text-sm transition-colors hover:text-gray-600"
            style="font-family:'Source Han Sans CN',sans-serif;font-weight:400;color:#999999;"
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
  const base = "font-family:'Source Han Sans CN',sans-serif;font-weight:400;"
  if (status === 'pending') return base + 'color:#F04F44;'
  if (status === 'paid') return base + 'color:#1427FF;'
  return base + 'color:#999999;'
}
</script>

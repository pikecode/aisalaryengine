<template>
  <div class="min-h-screen bg-theme-bg-primary">
    <component :is="layout" :key="route.path">
      <RouterView />
    </component>
  </div>
</template>

<script setup lang="ts">
import { computed, h } from 'vue'
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { useThemeStore } from '@/stores/theme'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const themeStore = useThemeStore()
const route = useRoute()

// 空白布局（用于登录/注册/忘记密码）
const BlankLayout = { render: () => h('router-view') }

const layout = computed(() => {
  const layoutName = route.meta.layout as string
  return layoutName === 'blank' ? BlankLayout : DefaultLayout
})

onMounted(() => {
  themeStore.init()
})
</script>

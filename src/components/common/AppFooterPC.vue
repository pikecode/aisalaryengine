<template>
  <footer class="text-gray-600 pt-16 pb-8" style="background: #FFFFFF;">
    <div class="max-w-7xl mx-auto px-16">

      <!-- Main grid: brand takes ~40%, links take remaining 60% -->
      <div class="flex gap-16 mb-16">

        <!-- Brand -->
        <div class="w-[380px] flex-shrink-0">
          <div class="flex items-center gap-2 mb-[10px]">
            <img src="@/assets/logo.png" alt="AI薪引擎" class="w-10 h-10" />
            <span style="font-family: Roboto, Roboto; font-weight: bold; font-size: 30px; color: #393939; line-height: 24px;">AI薪引擎</span>
          </div>
          <p class="mb-5" style="font-family: Roboto, Roboto; font-weight: 400; font-size: 16px; color: rgba(57,57,57,0.6); line-height: 30px;">抓住AI风口，迈出第一步。我们提供最专业的AI创业赋能工具与社区</p>
          <div class="flex gap-5">
            <img src="@/assets/weixin.png" alt="微信" class="w-8 h-8" />
            <img src="@/assets/weibo.png" alt="微博" class="w-8 h-8" />
            <img src="@/assets/sp.png" alt="小红书" class="w-8 h-8" />
            <img src="@/assets/in.png" alt="LinkedIn" class="w-8 h-8" />
          </div>
        </div>

        <!-- Link groups -->
        <div class="flex flex-1 justify-between">
          <div v-for="group in linkGroups" :key="group.title">
            <h4 class="mb-5" style="font-family: Roboto, Roboto; font-weight: 500; font-size: 20px; color: #393939; line-height: 30px;">{{ group.title }}</h4>
            <ul class="space-y-4" style="font-family: Roboto, Roboto; font-weight: 500; font-size: 14px; color: rgba(57,57,57,0.6); line-height: 30px;">
              <li v-for="link in group.links" :key="link.label">
                <a href="#" class="hover:text-gray-900 transition-colors">{{ link.label }}</a>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-200 pt-6 text-center text-sm text-gray-400">
        <p>© 2025 AI薪引擎. 保留所有权利。| ICP备案号：京ICP备16415621号</p>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
const linkGroups = [
  {
    title: '关于',
    links: [{ label: '关于我们' }, { label: '联系我们' }, { label: '加入我们' }]
  },
  {
    title: '产品',
    links: [{ label: 'AI创业机会库' }, { label: 'AI项目工作台' }, { label: '社区中心' }, { label: '定价' }]
  },
  {
    title: '帮助',
    links: [{ label: '帮助中心' }, { label: '使用教程' }]
  },
  {
    title: '法律',
    links: [{ label: '服务条款' }, { label: '隐私政策' }, { label: '社区规则' }]
  },
]
</script>

# 移动端优化改进方案

## 一、样式代码优化

### 1.1 统一提取重复样式到全局

**问题：** `line-clamp` 和 `scrollbar-hide` 在多个组件中重复定义

**解决方案：** 在 `tailwind.config.js` 中添加自定义工具类

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      // ...
    }
  },
  plugins: [
    // 添加 line-clamp 插件
    require('@tailwindcss/line-clamp'),
  ]
}
```

或者在 `main.css` 中统一定义：

```css
@layer utilities {
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .line-clamp-1 {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
```

**影响文件：**
- `src/components/common/AppHeader.vue`
- `src/components/project-library/ProjectLibraryCard.vue`
- `src/components/project-library/SearchSection.vue`
- `src/views/Workshop.vue`
- `src/views/Community.vue`

**优先级：** 🔴 高

---

### 1.2 创建移动端专用组件库

**问题：** 移动端和桌面端代码混在一起，维护困难

**解决方案：** 创建 `src/components/mobile/` 目录

```
src/components/
├── mobile/
│   ├── MobileHeader.vue
│   ├── MobileNav.vue
│   ├── MobileCard.vue
│   └── MobileList.vue
├── desktop/
│   └── ...
└── common/
    └── ...
```

**优先级：** 🟡 中

---

## 二、性能优化

### 2.1 图片懒加载

**问题：** 所有图片立即加载，影响首屏性能

**解决方案：** 使用 `@vueuse/core` 的 `useIntersectionObserver`

```vue
<script setup>
import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'

const imgRef = ref(null)
const isVisible = ref(false)

useIntersectionObserver(
  imgRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      isVisible.value = true
    }
  }
)
</script>

<template>
  <div ref="imgRef">
    <img v-if="isVisible" :src="imageSrc" alt="..." />
    <div v-else class="skeleton"></div>
  </div>
</template>
```

**优先级：** 🔴 高

---

### 2.2 虚拟滚动优化长列表

**问题：** Community页面渲染10+个帖子，DOM节点过多

**解决方案：** 使用 `vue-virtual-scroller`

```bash
npm install vue-virtual-scroller
```

```vue
<template>
  <RecycleScroller
    :items="posts"
    :item-size="200"
    key-field="id"
    v-slot="{ item }"
  >
    <PostCard :post="item" />
  </RecycleScroller>
</template>
```

**优先级：** 🟡 中

---

### 2.3 Swiper性能优化

**当前配置：**
```vue
<swiper
  :slides-per-view="1.2"
  :space-between="16"
  :centered-slides="true"
>
```

**优化配置：**
```vue
<swiper
  :slides-per-view="1.2"
  :space-between="16"
  :centered-slides="true"
  :lazy="true"
  :preload-images="false"
  :watch-slides-progress="true"
  :observer="true"
  :observe-parents="true"
>
  <swiper-slide v-for="item in items" :key="item.id">
    <img :data-src="item.image" class="swiper-lazy" />
    <div class="swiper-lazy-preloader"></div>
  </swiper-slide>
</swiper>
```

**优先级：** 🟡 中

---

## 三、交互体验优化

### 3.1 添加骨架屏

**问题：** 数据加载时页面空白，体验差

**解决方案：** 创建骨架屏组件

```vue
<!-- src/components/common/SkeletonCard.vue -->
<template>
  <div class="animate-pulse">
    <div class="h-32 bg-gray-200 rounded-lg mb-3"></div>
    <div class="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
    <div class="h-4 bg-gray-200 rounded w-1/2"></div>
  </div>
</template>
```

**使用：**
```vue
<template>
  <SkeletonCard v-if="loading" />
  <ActualCard v-else :data="data" />
</template>
```

**优先级：** 🔴 高

---

### 3.2 下拉刷新和上拉加载

**解决方案：** 使用 `@vueuse/core` 的 `useInfiniteScroll`

```vue
<script setup>
import { useInfiniteScroll } from '@vueuse/core'
import { ref } from 'vue'

const el = ref(null)
const data = ref([])

useInfiniteScroll(
  el,
  async () => {
    // 加载更多数据
    const newData = await fetchMore()
    data.value.push(...newData)
  },
  { distance: 10 }
)
</script>

<template>
  <div ref="el" class="overflow-auto h-screen">
    <div v-for="item in data" :key="item.id">
      {{ item }}
    </div>
  </div>
</template>
```

**优先级：** 🟡 中

---

### 3.3 触摸反馈优化

**问题：** 按钮点击没有明显反馈

**解决方案：** 添加 `active:` 状态

```vue
<button class="
  px-4 py-2 bg-blue-600 text-white rounded-lg
  active:scale-95 active:bg-blue-700
  transition-all duration-150
">
  点击我
</button>
```

**全局配置：**
```css
/* main.css */
@layer components {
  .btn-mobile {
    @apply active:scale-95 transition-transform duration-150;
  }
}
```

**优先级：** 🟢 低

---

## 四、响应式断点优化

### 4.1 自定义断点配置

**当前问题：** 硬编码 `md:` 前缀，不够灵活

**解决方案：** 在 `tailwind.config.js` 中自定义断点

```js
module.exports = {
  theme: {
    screens: {
      'xs': '375px',   // 小屏手机
      'sm': '640px',   // 大屏手机
      'md': '768px',   // 平板
      'lg': '1024px',  // 小屏电脑
      'xl': '1280px',  // 大屏电脑
      '2xl': '1536px', // 超大屏
    }
  }
}
```

**使用：**
```vue
<div class="text-sm sm:text-base md:text-lg">
  响应式文字
</div>
```

**优先级：** 🟡 中

---

### 4.2 使用容器查询（Container Queries）

**问题：** 组件响应式依赖视口宽度，不够灵活

**解决方案：** 使用 Tailwind 3.4+ 的容器查询

```js
// tailwind.config.js
module.exports = {
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}
```

```vue
<div class="@container">
  <div class="@md:grid-cols-2 @lg:grid-cols-3">
    <!-- 基于容器宽度响应 -->
  </div>
</div>
```

**优先级：** 🟢 低

---

## 五、可访问性优化

### 5.1 最小点击区域

**问题：** 移动端按钮可能小于44x44px

**解决方案：** 添加最小尺寸约束

```css
@layer components {
  .btn-mobile {
    @apply min-h-[44px] min-w-[44px];
  }
}
```

**优先级：** 🔴 高

---

### 5.2 添加ARIA标签

**解决方案：**
```vue
<button
  aria-label="关闭菜单"
  aria-expanded="false"
  @click="closeMenu"
>
  <svg>...</svg>
</button>

<nav aria-label="主导航">
  <ul role="list">
    <li><a href="/">首页</a></li>
  </ul>
</nav>
```

**优先级：** 🟡 中

---

## 六、代码组织优化

### 6.1 创建移动端Composables

**创建：** `src/composables/useMobile.ts`

```ts
import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'

export function useMobile() {
  const { width } = useWindowSize()

  const isMobile = computed(() => width.value < 768)
  const isTablet = computed(() => width.value >= 768 && width.value < 1024)
  const isDesktop = computed(() => width.value >= 1024)

  return {
    isMobile,
    isTablet,
    isDesktop
  }
}
```

**使用：**
```vue
<script setup>
import { useMobile } from '@/composables/useMobile'

const { isMobile } = useMobile()
</script>

<template>
  <MobileLayout v-if="isMobile" />
  <DesktopLayout v-else />
</template>
```

**优先级：** 🟡 中

---

### 6.2 统一移动端常量

**创建：** `src/constants/mobile.ts`

```ts
export const MOBILE_BREAKPOINT = 768
export const TABLET_BREAKPOINT = 1024

export const MOBILE_PADDING = {
  xs: 'px-3',
  sm: 'px-4',
  md: 'px-6'
}

export const MOBILE_FONT_SIZE = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base'
}

export const TOUCH_TARGET_SIZE = 'min-h-[44px] min-w-[44px]'
```

**优先级：** 🟢 低

---

## 七、测试和监控

### 7.1 移动端性能监控

**添加：** Lighthouse CI 或 Web Vitals

```bash
npm install web-vitals
```

```ts
// src/utils/performance.ts
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

export function reportWebVitals() {
  getCLS(console.log)
  getFID(console.log)
  getFCP(console.log)
  getLCP(console.log)
  getTTFB(console.log)
}
```

**优先级：** 🟡 中

---

### 7.2 真机测试清单

- [ ] iOS Safari (iPhone 12+)
- [ ] Android Chrome (主流机型)
- [ ] 微信内置浏览器
- [ ] 横屏/竖屏切换
- [ ] 不同网络环境（3G/4G/5G/WiFi）
- [ ] 触摸手势（滑动、缩放、长按）

**优先级：** 🔴 高

---

## 八、实施优先级

### 🔴 高优先级（立即实施）
1. 统一提取重复样式
2. 添加骨架屏
3. 图片懒加载
4. 最小点击区域
5. 真机测试

### 🟡 中优先级（近期实施）
1. 虚拟滚动
2. Swiper性能优化
3. 下拉刷新/上拉加载
4. 自定义断点
5. 移动端Composables
6. ARIA标签

### 🟢 低优先级（长期优化）
1. 创建移动端组件库
2. 触摸反馈优化
3. 容器查询
4. 统一移动端常量

---

## 九、预期收益

**性能提升：**
- 首屏加载时间减少 30-40%
- 长列表滚动帧率提升至 60fps
- 图片加载流量节省 50%+

**体验提升：**
- 加载状态可见，减少用户焦虑
- 触摸反馈更自然
- 无限滚动体验更流畅

**代码质量：**
- 减少重复代码 40%+
- 组件复用性提升
- 维护成本降低

---

## 十、下一步行动

1. **立即执行：** 统一样式提取（1小时）
2. **本周完成：** 骨架屏 + 图片懒加载（4小时）
3. **下周完成：** 虚拟滚动 + 性能优化（8小时）
4. **持续优化：** 真机测试 + 用户反馈迭代

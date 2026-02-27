# AI薪引擎 — 项目结构文档

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Vue 3 | ^3.x | 前端框架（Composition API） |
| TypeScript | ^5.x | 类型安全 |
| Vite | ^5.x | 构建工具 |
| Tailwind CSS | ^3.x | 样式（mobile-first 响应式） |
| Pinia | ^2.x | 状态管理 |
| Vue Router | ^4.x | 路由 |

---

## 目录结构

```
src/
├── api/                  # API 抽象层
│   ├── projects.ts       # 项目相关接口
│   └── user.ts           # 用户认证接口
├── assets/
│   └── main.css          # Tailwind 入口 + 全局组件类
├── components/
│   ├── common/           # 全局公共组件
│   │   ├── AppHeader.vue
│   │   └── AppFooter.vue
│   └── home/             # 首页模块组件
│       ├── HeroSection.vue
│       ├── StatsSection.vue
│       ├── ProjectGrid.vue
│       ├── ProjectCard.vue
│       ├── ValuePillars.vue
│       ├── SuccessStories.vue
│       └── PricingSection.vue
├── composables/          # 可复用逻辑
│   ├── useSearch.ts
│   └── useFilter.ts
├── data/                 # Mock 数据层
│   ├── projects.ts
│   ├── pricing.ts
│   └── content.ts
├── layouts/
│   └── DefaultLayout.vue # Header + slot + Footer 布局
├── router/
│   └── index.ts          # 路由配置
├── stores/               # Pinia 状态
│   ├── projects.ts
│   └── user.ts
├── types/                # TypeScript 类型定义
│   ├── index.ts          # 统一导出
│   ├── project.ts
│   ├── pricing.ts
│   └── common.ts
├── views/                # 页面视图
│   ├── HomeView.vue
│   ├── ProjectLibrary.vue
│   ├── Workshop.vue
│   ├── Community.vue
│   └── Membership.vue
├── App.vue
├── main.ts
└── vite-env.d.ts         # Vue SFC 类型声明
```

---

## 路由

| 路径 | 组件 | 说明 |
|------|------|------|
| `/` | HomeView | 首页 |
| `/projects` | ProjectLibrary | AI创业机会库 |
| `/workshop` | Workshop | AI项目工作台 |
| `/community` | Community | 社区中心 |
| `/membership` | Membership | 定价与会员 |

---

## 首页组件说明

### AppHeader
顶部导航栏。H5 显示横向可滚动 Tab 导航，PC 显示完整菜单 + 语言切换（中/En）+ 登录按钮。

### HeroSection
首屏 Banner。
- H5：浅蓝白渐变背景，内联统计数据，深色 CTA 按钮，筛选 Pills
- PC：深紫渐变背景（hero-gradient），白色 CTA 按钮

### StatsSection
平台数据统计（用户数、项目数、成功案例等）。H5 隐藏，数据内联在 HeroSection 展示。

### ProjectGrid
项目列表区块，包含分类筛选 Tab 和热榜 Ticker。
- H5：启动资金 / 时间投入 / 技术门槛 三维筛选
- PC：副业 / 创业 / 工具 分类筛选

### ProjectCard
单个项目卡片，被 ProjectGrid 循环渲染。
- H5：横向列表布局，含 0成本 badge、星级难度、立即上车按钮
- PC：竖向卡片布局

### ValuePillars
四大价值支柱：项目模板库 / AI工作台 / Pro社区 / 全球会员。数据来自 `src/data/content.ts`。

### SuccessStories
成功案例展示。H5 横向滚动，PC 三列 Grid。数据来自 `src/data/content.ts`。

### PricingSection
定价套餐：免费版 / Pro会员版(¥99/月) / 终身会员(¥99/年付)。数据来自 `src/data/pricing.ts`。

### AppFooter
底部，含社交媒体图标（微信/微博/LinkedIn/Instagram）和 ICP 备案号。

---

## 响应式策略

采用 **一个组件 + Tailwind 响应式前缀** 方案，mobile-first：

- 默认样式 → H5（< 768px）
- `md:` 前缀 → PC（≥ 768px）

差异较大的区块使用 `flex md:hidden` / `hidden md:flex` 切换不同布局结构。

---

## 数据层

```
src/data/          ← Mock 数据（开发阶段）
src/api/           ← API 函数（TODO: 替换为真实接口）
src/stores/        ← Pinia 状态，消费 api/ 或 data/
```

替换真实接口时，只需修改 `src/api/` 中对应函数，组件和 store 无需改动。

---

## 环境变量

```bash
VITE_API_BASE_URL=http://localhost:3000/api
```

复制 `.env.example` 为 `.env` 后启动开发服务器。

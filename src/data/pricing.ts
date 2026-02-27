import type { PricingPlan } from '@/types/pricing'

export const mockPlans: PricingPlan[] = [
  {
    id: 'free',
    name: '免费版',
    price: 0,
    period: '/永久',
    features: [
      '浏览10个创业项目',
      '基础社区访问',
      '每月3次AI工作台使用',
      '公开案例查看'
    ],
    ctaText: '免费开始',
    isPopular: false
  },
  {
    id: 'pro',
    name: 'Pro会员版',
    price: 99,
    originalPrice: 888,
    period: '/月',
    features: [
      '解锁全部200+项目',
      'AI工作台无限使用',
      'Pro社区专属频道',
      '每月新增项目优先体验',
      '1对1导师答疑（每月2次）'
    ],
    ctaText: '立即升级',
    isPopular: true
  },
  {
    id: 'lifetime',
    name: '终身会员',
    price: 99,
    originalPrice: 888,
    period: '/年付',
    features: [
      '包含Pro所有权益',
      '终身免费更新',
      '专属创客社群',
      '线下活动优先名额',
      '联合创始人徽章'
    ],
    ctaText: '一次买断',
    isPopular: false
  }
]

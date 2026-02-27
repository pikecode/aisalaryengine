// Project types
export interface Project {
  id: string
  title: string
  category: '副业' | '创业' | '工具'
  tags: string[]
  views: number
  likes: number
  difficulty: 1 | 2 | 3
  revenue: string
  coverImage: string
  description: string
}

export interface PricingPlan {
  id: string
  name: string
  price: number
  originalPrice?: number
  period: string
  features: string[]
  isPopular?: boolean
  ctaText: string
}

export interface Testimonial {
  id: string
  username: string
  avatar: string
  screenshot: string
  revenue: string
  description: string
}

export interface NavItem {
  label: string
  path: string
}

export interface Stat {
  value: string
  label: string
  icon: string
}

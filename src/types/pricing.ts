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

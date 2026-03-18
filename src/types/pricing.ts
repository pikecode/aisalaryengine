export interface PricingPlan {
  id: string
  name: string
  price: number
  priceColor?: string
  periodLabel: string
  features: string[]
  disabledFeatures?: string[]
  ctaText: string
  ctaStyle: 'outline' | 'solid'
  bg: string
  border?: string
  isPopular?: boolean
}

export interface PricingPlan {
    title: string
    description: string
    price: {
      monthly: string
      yearly: string
    }
    features: string[]
    highlighted: boolean
  }
export interface Product {
  id: number
  title: string
  description: string
  price: string
  image: string
  level: string | null
  features: string[]
}

export type SkillLevel = "novice" | "advanced" | "training" | null

export interface NavigationItem {
  name: string
  href: string
}


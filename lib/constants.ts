export const SITE_NAME = "ClashiVFX"
export const SITE_DESCRIPTION = "Professional effects presets and plugins for After Effects"

export const NAVIGATION_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Store", href: "/store" },
  { name: "Community", href: "/community" },
  { name: "About", href: "/about" }, // Corregido para que apunte a /about
  { name: "Contact", href: "/contact" },
]

export const getProductsBySkillLevel = (skillLevel: string | null) => {
  return [
    {
      id: 1,
      title: "After Effects Shake Presets",
      description: "Complete package of shake presets for After Effects",
      price: skillLevel === "novice" ? "$29.99" : skillLevel === "intermediate" ? "$49.99" : "$79.99",
      image: "/placeholder.svg?height=300&width=400",
      level: skillLevel,
      features:
        skillLevel === "novice"
          ? ["10 basic shake presets", "Video tutorial", "Basic support"]
          : skillLevel === "intermediate"
            ? ["25 intermediate shake presets", "Video tutorials", "Email support", "Free updates"]
            : [
                "50 professional shake presets",
                "Advanced video tutorials",
                "Priority support",
                "Free lifetime updates",
                "Custom presets",
              ],
    },
    {
      id: 2,
      title: "3D Text Presets",
      description: "3D text preset package with Element 3D plugin for After Effects",
      price: skillLevel === "novice" ? "$39.99" : skillLevel === "intermediate" ? "$69.99" : "$99.99",
      image: "/placeholder.svg?height=300&width=400",
      level: skillLevel,
      features:
        skillLevel === "novice"
          ? ["15 basic 3D text presets", "Video tutorial", "Basic support"]
          : skillLevel === "intermediate"
            ? ["30 intermediate 3D text presets", "Video tutorials", "Email support", "Free updates"]
            : [
                "60 professional 3D text presets",
                "Advanced video tutorials",
                "Priority support",
                "Free lifetime updates",
                "Custom text effects",
              ],
    },
    {
      id: 3,
      title: "Time-Saving Plugins Bundle",
      description: "Exclusive plugins to optimize your editing time",
      price: skillLevel === "novice" ? "$49.99" : skillLevel === "intermediate" ? "$89.99" : "$129.99",
      image: "/placeholder.svg?height=300&width=400",
      level: skillLevel,
      features:
        skillLevel === "novice"
          ? ["3 basic plugins", "Video tutorial", "Basic support"]
          : skillLevel === "intermediate"
            ? ["5 intermediate plugins", "Video tutorials", "Email support", "Free updates"]
            : [
                "10 professional plugins",
                "Advanced video tutorials",
                "Priority support",
                "Free lifetime updates",
                "Custom plugin configuration",
              ],
    },
  ]
}


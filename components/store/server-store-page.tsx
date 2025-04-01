"use client"

import { useState } from "react"
import { SkillLevelSelector } from "@/components/store/skill-level-selector"
import { ProductGrid } from "@/components/store/product-grid"
import { getProductsBySkillLevel } from "@/lib/constants"
import type { SkillLevel } from "@/types"

export default function StorePageClient() {
  const [skillLevel, setSkillLevel] = useState<SkillLevel>(null)
  const [showProducts, setShowProducts] = useState(false)

  const handleSkillLevelSubmit = () => {
    if (skillLevel) {
      setShowProducts(true)
    }
  }

  const products = getProductsBySkillLevel(skillLevel)

  return (
    <section className="w-full min-h-[calc(100vh-64px)] flex items-center justify-center bg-[#030303]">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        {!showProducts ? (
          <SkillLevelSelector skillLevel={skillLevel} setSkillLevel={setSkillLevel} onSubmit={handleSkillLevelSubmit} />
        ) : (
          <ProductGrid products={products} skillLevel={skillLevel} onChangeSkillLevel={() => setShowProducts(false)} />
        )}
      </div>
    </section>
  )
}


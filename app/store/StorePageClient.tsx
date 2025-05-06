"use client"

import { useState } from "react"
import { SkillLevelSelector } from "@/components/store/skill-level-selector"
import { AdvancedPackCard } from "@/components/store/advanced-pack-card"
import { NovicePackCard } from "@/components/store/novice-pack-card"
import type { SkillLevel } from "@/types"
// Importaciones existentes

export default function StorePageClient() {
  const [skillLevel, setSkillLevel] = useState<SkillLevel>(null)
  const [showProducts, setShowProducts] = useState(false)

  const handleSkillLevelSubmit = () => {
    setShowProducts(true)
  }

  const handleChangeSkillLevel = (level: SkillLevel) => {
    setSkillLevel(level)
  }

  return (
    <section className="w-full min-h-[calc(100vh-64px)] flex items-center justify-center bg-[#030303]">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        {!showProducts ? (
          <SkillLevelSelector skillLevel={skillLevel} setSkillLevel={setSkillLevel} onSubmit={handleSkillLevelSubmit} />
        ) : (
          <>
            {skillLevel === "advanced" ? (
              <AdvancedPackCard setSkillLevel={handleChangeSkillLevel} />
            ) : skillLevel === "novice" ? (
              <NovicePackCard setSkillLevel={handleChangeSkillLevel} />
            ) : (
              // Fallback a novice si por alguna razón no hay nivel seleccionado
              <NovicePackCard setSkillLevel={handleChangeSkillLevel} />
            )}
            {/* El carrusel ya está incluido en cada componente de pack */}
          </>
        )}
      </div>
    </section>
  )
}



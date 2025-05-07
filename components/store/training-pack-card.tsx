"use client"

import { useEffect } from "react"
import { useTranslation } from "@/lib/i18n/use-translation"
import type { SkillLevel } from "@/types"

interface TrainingPackCardProps {
  setSkillLevel: (level: SkillLevel) => void
}

// Esta es una versión modificada que redirige a la tienda en lugar de mostrar formación
export function TrainingPackCard({ setSkillLevel }: TrainingPackCardProps) {
  const { t } = useTranslation()

  // Redirigir a la tienda Shopify
  useEffect(() => {
    window.location.href = "https://e08ff1-xx.myshopify.com/collections/all"
  }, [])

  // Renderizar un componente vacío mientras se redirige
  return (
    <div className="min-h-[200px] flex items-center justify-center">
      <p className="text-cream">Redirigiendo a la tienda...</p>
    </div>
  )
}

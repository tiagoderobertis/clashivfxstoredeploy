"use client"

import { Rocket, FlameIcon as Fire, ShoppingCart, Check } from "lucide-react"
import type { SkillLevel } from "@/types"
import { useTranslation } from "@/lib/i18n/use-translation"
import { useState } from "react"

interface SkillLevelSelectorProps {
  skillLevel: SkillLevel
  setSkillLevel: (level: SkillLevel) => void
  onSubmit: () => void
}

export function SkillLevelSelector({ skillLevel, setSkillLevel, onSubmit }: SkillLevelSelectorProps) {
  const { t } = useTranslation()
  const [hoveredCard, setHoveredCard] = useState<SkillLevel>(null)

  // Función para renderizar los beneficios con iconos de check
  const renderBenefits = (benefits: string[]) => {
    return (
      <ul className="mt-3 space-y-1">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-xs text-cream/90">{benefit}</span>
          </li>
        ))}
      </ul>
    )
  }

  // Función para manejar la selección y envío en un solo paso
  const handleSelectAndSubmit = (level: SkillLevel) => {
    setSkillLevel(level)
    onSubmit()
  }

  // Función para abrir la tienda Shopify
  const goToShopify = () => {
    window.open("https://e08ff1-xx.myshopify.com/collections/all", "_blank", "noopener,noreferrer")
  }

  // Clase común para todos los botones para asegurar el mismo tamaño
  const buttonClass = `w-full h-12 py-3 px-4 rounded-lg cursor-pointer transition-all text-white font-medium
    transform hover:scale-105 hover:shadow-lg flex items-center justify-center`

  return (
    <div className="mx-auto max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* TARJETA PRINCIPIANTE */}
        <div
          className={`relative overflow-hidden rounded-xl transition-all duration-300 flex flex-col h-full ${
            skillLevel === "novice" ? "ring-2 ring-primary shadow-lg shadow-primary/20" : "border border-orange-500/30"
          } ${hoveredCard === "novice" ? "transform scale-[1.02] shadow-lg shadow-blue-500/30" : ""} hover:border-blue-500/70`}
          onMouseEnter={() => setHoveredCard("novice")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* Fondo con gradiente */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A237E]/30 to-[#0A1929]/80 opacity-80"></div>

          <div className="relative p-6 flex-1 flex flex-col">
            {/* Icono y título */}
            <div className="flex items-center mb-4">
              <div className="bg-[#1A237E] p-3 rounded-full mr-3">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-cream">{t("store.skillLevel.novice.title")}</h3>
            </div>

            <p className="text-sm text-cream/80 mb-4">{t("store.skillLevel.novice.description")}</p>

            <div className="flex-1">
              {renderBenefits([
                t("store.skillLevel.novice.benefits.benefit1"),
                t("store.skillLevel.novice.benefits.benefit2"),
                t("store.skillLevel.novice.benefits.benefit3"),
                t("store.skillLevel.novice.benefits.benefit4"),
              ])}
            </div>

            <div className="mt-auto pt-6">
              <button
                onClick={() => handleSelectAndSubmit("novice")}
                className={`${buttonClass} bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800`}
              >
                {t("store.skillLevel.novice.cta")}
              </button>
            </div>
          </div>
        </div>

        {/* TARJETA AVANZADO */}
        <div
          className={`relative overflow-hidden rounded-xl transition-all duration-300 flex flex-col h-full ${
            skillLevel === "advanced"
              ? "ring-2 ring-primary shadow-lg shadow-primary/20"
              : "border border-orange-500/30"
          } ${hoveredCard === "advanced" ? "transform scale-[1.02] shadow-lg shadow-primary/30" : ""} hover:border-primary/70`}
          onMouseEnter={() => setHoveredCard("advanced")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* Fondo con gradiente */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#000000] to-[#1A1A1A] opacity-80"></div>

          <div className="relative p-6 flex-1 flex flex-col">
            {/* Icono y título */}
            <div className="flex flex-col items-center mb-4">
              <div className="bg-green-600 text-xs font-bold text-white px-3 py-1 rounded-full mb-3">
                🔥 {t("store.skillLevel.bestSeller")}
              </div>
              <div className="flex items-center">
                <div className="bg-primary p-3 rounded-full mr-3">
                  <Fire className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-cream">{t("store.skillLevel.advanced.title")}</h3>
              </div>
            </div>

            <p className="text-sm text-cream/80 mb-4">{t("store.skillLevel.advanced.description")}</p>

            <div className="flex-1">
              {renderBenefits([
                t("store.skillLevel.advanced.benefits.benefit1"),
                t("store.skillLevel.advanced.benefits.benefit2"),
                t("store.skillLevel.advanced.benefits.benefit3"),
                t("store.skillLevel.advanced.benefits.benefit4"),
                t("store.skillLevel.advanced.benefits.benefit5"),
              ])}
            </div>

            <div className="mt-auto pt-6">
              <button
                onClick={() => handleSelectAndSubmit("advanced")}
                className={`${buttonClass} bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700`}
              >
                {t("store.skillLevel.advanced.cta")}
              </button>
            </div>
          </div>
        </div>

        {/* TARJETA VISITA MI TIENDA (reemplaza la tarjeta de formación) */}
        <div
          className={`relative overflow-hidden rounded-xl transition-all duration-300 flex flex-col h-full 
          border border-teal-500/30 ${hoveredCard === "training" ? "transform scale-[1.02] shadow-lg shadow-teal-500/30" : ""} hover:border-teal-500/70`}
          onMouseEnter={() => setHoveredCard("training")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* Fondo con gradiente */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#004D40]/40 to-[#00695C]/80 opacity-80"></div>

          <div className="relative p-6 flex-1 flex flex-col">
            {/* Icono y título */}
            <div className="flex items-center mb-4">
              <div className="bg-teal-600 p-3 rounded-full mr-3">
                <ShoppingCart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-cream">Visita mi Tienda</h3>
            </div>

            <p className="text-sm text-cream/80 mb-4">
              Explora todos los packs disponibles en nuestra tienda online y encuentra el que mejor se adapte a tus
              necesidades.
            </p>

            <div className="flex-1">
              <ul className="mt-3 space-y-1">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-teal-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-cream/90">Ver todos los packs disponibles</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-teal-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-cream/90">Comparar características y precios</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-teal-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-cream/90">Proceso de compra fácil y seguro</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-teal-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-cream/90">Acceso inmediato tras la compra</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-teal-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-cream/90">Soporte técnico incluido</span>
                </li>
              </ul>
            </div>

            <div className="mt-auto pt-6">
              <button
                onClick={goToShopify}
                className={`${buttonClass} bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700`}
              >
                Ver Todos los Packs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowRight, Check, ChevronDown, ListFilter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CurrencySelector } from "@/components/store/currency-selector"
import { useTranslation } from "@/lib/i18n/use-translation"
import type { SkillLevel } from "@/types"

interface AdvancedPackCardProps {
  setSkillLevel: (level: SkillLevel) => void
}

export function AdvancedPackCard({ setSkillLevel }: AdvancedPackCardProps) {
  const { t, formatPrice, currency } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Usar traducciones para las características
  const features = [
    t("store.products.advancedPack.features.feature1"),
    t("store.products.advancedPack.features.feature2"),
    t("store.products.advancedPack.features.feature3"),
    t("store.products.advancedPack.features.feature4"),
    t("store.products.advancedPack.features.feature5"),
    t("store.products.advancedPack.features.feature6"),
    t("store.products.advancedPack.features.feature7"),
  ]

  // Actualizar la función handleBuyNow para que dirija al enlace correcto del pack avanzado
  const handleBuyNow = () => {
    window.location.href = "https://e08ff1-xx.myshopify.com/products/pack-de-efectos-esenciales"
  }

  // Cerrar el menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Función para mostrar el precio con formato personalizado
  const getFormattedPrice = () => {
    if (currency === "ARS") {
      return "ARS $19.999"
    } else {
      return "$19.99"
    }
  }

  return (
    <div className="space-y-6">
      <div className="md:text-left text-center md:max-w-none max-w-[700px] mx-auto md:mx-0">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tighter sm:text-3xl text-cream">
          {t("store.products.advancedPack.title")}
        </h1>
        <p className="text-sm md:text-base text-cream/80 mt-2">{t("store.products.advancedPack.description")}</p>
      </div>

      <div className="container mx-auto px-4 md:px-0">
        <div className="flex md:justify-between justify-center flex-wrap md:flex-nowrap gap-2 md:gap-4 mb-6 items-center">
          <div className="flex items-center gap-2 md:gap-4">
            <CurrencySelector />

            {/* Botón de cambiar nivel */}
            <div className="relative">
              <Button
                ref={buttonRef}
                onClick={toggleMenu}
                size="sm"
                variant="outline"
                className="border-orange-500/30 bg-[#0A0A0A] hover:bg-[#1A1A1A] text-cream text-xs sm:text-sm"
              >
                <ListFilter className="h-4 w-4 mr-1" />
                <span className="hidden xs:inline">{t("store.products.changeLevel")}:</span>
                <span className="font-medium ml-1">{t("store.skillLevel.advanced.title")}</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </Button>

              {isMenuOpen && (
                <div
                  ref={menuRef}
                  className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-[#0A0A0A] border border-orange-500/30 z-50"
                >
                  <div className="py-1">
                    <button
                      onClick={() => setSkillLevel("novice")}
                      className="flex items-center gap-2 px-4 py-2 text-sm w-full text-left hover:bg-[#1A1A1A] text-cream"
                    >
                      {t("store.skillLevel.novice.title")}
                    </button>
                    <button
                      onClick={() => setSkillLevel("advanced")}
                      className="flex items-center gap-2 px-4 py-2 text-sm w-full text-left bg-[#1A1A1A] text-cream"
                    >
                      {t("store.skillLevel.advanced.title")}
                    </button>
                    <button
                      onClick={() => setSkillLevel("training")}
                      className="flex items-center gap-2 px-4 py-2 text-sm w-full text-left hover:bg-[#1A1A1A] text-cream"
                    >
                      {t("store.skillLevel.training.title")}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Diseño más compacto para la tarjeta */}
        <div className="grid gap-6 sm:grid-cols-1 md:max-w-[600px] md:mx-0 mx-auto">
          <Card className="flex flex-col h-full bg-[#0A0A0A] border-orange-500/30">
            <CardHeader className="p-0">
              <div className="relative h-32 w-full">
                <div className="absolute top-2 right-2 bg-green-600 text-xs font-bold text-white px-3 py-1 rounded-full z-10">
                  🔥 {t("store.skillLevel.bestSeller")}
                </div>
                <div className="w-full h-full bg-gradient-to-r from-orange-500/20 to-red-600/20 rounded-t-lg flex items-center justify-center">
                  <h2 className="text-2xl font-bold text-cream">PACK AVANZADO</h2>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1 p-4">
              <CardTitle className="text-lg text-cream mb-2">{t("store.products.includes")}</CardTitle>
              <div className="mt-3">
                <ul className="space-y-2 text-sm text-cream/90">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 mt-auto">
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col">
                  <div className="text-xl font-bold text-cream">{getFormattedPrice()}</div>
                  <div className="text-sm text-cream/60 line-through">
                    {currency === "ARS" ? "ARS $80.000" : "$80.00"}
                  </div>
                </div>
                <Button onClick={handleBuyNow} className="btn-primary group">
                  {t("store.products.addToCart")}
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}


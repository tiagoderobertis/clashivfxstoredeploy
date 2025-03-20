"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/store/product-card"
import { CurrencySelector } from "@/components/store/currency-selector"
import { ChevronDown, ListFilter } from "lucide-react"
import type { Product, SkillLevel } from "@/types"
import { useTranslation } from "@/lib/i18n/use-translation"
import { getProductsBySkillLevel } from "@/lib/constants"

interface ProductGridProps {
  products: Product[]
  skillLevel: SkillLevel
  onChangeSkillLevel: () => void
  setSkillLevel: (level: SkillLevel) => void
  onViewAllPacks: () => void
}

export function ProductGrid({
  products,
  skillLevel,
  onChangeSkillLevel,
  setSkillLevel,
  onViewAllPacks,
}: ProductGridProps) {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [localProducts, setLocalProducts] = useState(products)
  const [localSkillLevel, setLocalSkillLevel] = useState<SkillLevel>(skillLevel)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Map skill level to Spanish for display when in Spanish
  const getLocalizedLevel = (level: SkillLevel) => {
    if (level === "novice") return t("store.skillLevel.novice.title")
    if (level === "intermediate") return t("store.skillLevel.intermediate.title")
    if (level === "advanced") return t("store.skillLevel.advanced.title")
    return ""
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

  const handleSkillLevelChange = (level: SkillLevel) => {
    // Actualizar el nivel de habilidad local
    setLocalSkillLevel(level)

    // Actualizar los productos basados en el nuevo nivel
    const newProducts = getProductsBySkillLevel(level)
    setLocalProducts(newProducts)

    // Cerrar el menú
    setIsMenuOpen(false)
  }

  return (
    <div className="space-y-6">
      <div className="md:text-left text-center md:max-w-none max-w-[700px] mx-auto md:mx-0">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tighter sm:text-3xl text-cream">
          {t("store.products.title", { level: getLocalizedLevel(localSkillLevel) })}
        </h1>
        <p className="text-sm md:text-base text-cream/80 mt-2">{t("store.products.description")}</p>
      </div>

      <div className="container mx-auto px-4 md:px-0">
        <div className="flex md:justify-between justify-center flex-wrap md:flex-nowrap gap-2 md:gap-4 mb-6 items-center">
          <div className="flex items-center gap-2 md:gap-4">
            <CurrencySelector />

            {/* Botón de cambiar nivel con menú desplegable */}
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
                <span className="font-medium ml-1">{getLocalizedLevel(localSkillLevel)}</span>
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
                      className={`flex items-center gap-2 px-4 py-2 text-sm w-full text-left ${
                        localSkillLevel === "novice" ? "bg-[#1A1A1A]" : "hover:bg-[#1A1A1A]"
                      } text-cream`}
                    >
                      {t("store.skillLevel.novice.title")}
                    </button>
                    <button
                      onClick={() => setSkillLevel("intermediate")}
                      className={`flex items-center gap-2 px-4 py-2 text-sm w-full text-left ${
                        localSkillLevel === "intermediate" ? "bg-[#1A1A1A]" : "hover:bg-[#1A1A1A]"
                      } text-cream`}
                    >
                      {t("store.skillLevel.intermediate.title")}
                    </button>
                    <button
                      onClick={() => setSkillLevel("advanced")}
                      className={`flex items-center gap-2 px-4 py-2 text-sm w-full text-left ${
                        localSkillLevel === "advanced" ? "bg-[#1A1A1A]" : "hover:bg-[#1A1A1A]"
                      } text-cream`}
                    >
                      {t("store.skillLevel.advanced.title")}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Botón de ver todos los packs */}
          <Button
            size="sm"
            variant="outline"
            className="border-orange-500/30 bg-[#0A0A0A] hover:bg-[#1A1A1A] text-cream"
            onClick={onViewAllPacks}
          >
            {t("store.products.viewAll")}
          </Button>
        </div>

        {/* Grid de productos alineado a la izquierda en desktop y centrado en móvil */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:max-w-[80%] md:mx-0 mx-auto">
          {localProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}


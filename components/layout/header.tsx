"use client"

import { useState } from "react"
import Link from "next/link"
import { X, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NAVIGATION_ITEMS } from "@/lib/constants"
import { LanguageSelector } from "@/components/layout/language-selector"
import { useTranslation } from "@/lib/i18n/use-translation"

export function Header() {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#060606] border-b border-orange-500/20">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          {/* Logo - Ancho fijo para evitar desplazamiento */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-cream">
              <span>{t("site.name")}</span>
            </Link>
          </div>

          {/* Navegación para escritorio - Centrada */}
          <nav className="hidden md:flex items-center justify-center flex-1">
            <div className="flex gap-6">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium hover:underline underline-offset-4 text-cream"
                >
                  {t(`nav.${item.name.toLowerCase()}`)}
                </Link>
              ))}
            </div>
          </nav>

          {/* Controles a la derecha - Ancho fijo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <LanguageSelector />
            <Button
              className="md:hidden btn-primary"
              size="icon"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#060606] border-b border-orange-500/20 z-50 md:hidden">
          <nav className="flex flex-col p-4 container mx-auto">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="py-3 text-sm font-medium hover:bg-[#0A0A0A] px-4 rounded text-cream"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(`nav.${item.name.toLowerCase()}`)}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}


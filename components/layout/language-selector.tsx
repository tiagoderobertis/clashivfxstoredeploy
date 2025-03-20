"use client"

import { useState, useRef, useEffect } from "react"
import { useTranslation } from "@/lib/i18n/use-translation"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageSelector() {
  const { language, setLanguage } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Cerrar el menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const selectLanguage = (lang: "en" | "es") => {
    setLanguage(lang)
    setIsOpen(false) // Cerrar el menú después de seleccionar
  }

  return (
    <div className="relative">
      <Button
        ref={buttonRef}
        variant="ghost"
        size="icon"
        className="text-cream hover:bg-black/20 relative z-10"
        onClick={toggleMenu}
      >
        <Globe className="h-5 w-5" />
        <span className="sr-only">Toggle language</span>
      </Button>

      {isOpen && (
        <div
          ref={menuRef}
          className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-[#0A0A0A] border border-orange-500/30 z-50"
        >
          <div className="py-1">
            <button
              onClick={() => selectLanguage("en")}
              className={`flex items-center gap-2 px-4 py-2 text-sm w-full text-left ${
                language === "en" ? "bg-[#1A1A1A]" : "hover:bg-[#1A1A1A]"
              } text-cream`}
            >
              <span className="text-base" role="img" aria-label="English">
                🇺🇸
              </span>
              English
            </button>
            <button
              onClick={() => selectLanguage("es")}
              className={`flex items-center gap-2 px-4 py-2 text-sm w-full text-left ${
                language === "es" ? "bg-[#1A1A1A]" : "hover:bg-[#1A1A1A]"
              } text-cream`}
            >
              <span className="text-base" role="img" aria-label="Español">
                🇪🇸
              </span>
              Español
            </button>
          </div>
        </div>
      )}
    </div>
  )
}


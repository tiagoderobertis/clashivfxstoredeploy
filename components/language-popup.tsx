"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { useTranslation } from "@/lib/i18n/use-translation"
import { Button } from "@/components/ui/button"

export function LanguagePopup() {
  const { language, setLanguage, t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Verificar si ya se mostró el popup antes
    const hasSeenPopup = localStorage.getItem("hasSeenLanguagePopup")

    if (!hasSeenPopup) {
      // Mostrar el popup después de un pequeño retraso
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem("hasSeenLanguagePopup", "true")
  }

  const handleLanguageSelect = (lang: "en" | "es") => {
    setLanguage(lang)
    handleClose()
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 z-30 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="bg-[#0A0A0A] border border-orange-500/30 rounded-lg shadow-lg p-4 max-w-xs">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-cream font-medium">{t("language.select")}</h3>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            className="h-6 w-6 rounded-full hover:bg-[#1A1A1A] text-cream"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => handleLanguageSelect("en")}
            className={`flex items-center gap-3 p-2 rounded-md transition-colors ${
              language === "en" ? "bg-[#1A1A1A]" : "hover:bg-[#1A1A1A]"
            }`}
          >
            <span className="text-xl" role="img" aria-label="English">
              🇺🇸
            </span>
            <span className="text-cream">English</span>
          </button>
          <button
            onClick={() => handleLanguageSelect("es")}
            className={`flex items-center gap-3 p-2 rounded-md transition-colors ${
              language === "es" ? "bg-[#1A1A1A]" : "hover:bg-[#1A1A1A]"
            }`}
          >
            <span className="text-xl" role="img" aria-label="Español">
              🇪🇸
            </span>
            <span className="text-cream">Español</span>
          </button>
        </div>
      </div>
    </div>
  )
}


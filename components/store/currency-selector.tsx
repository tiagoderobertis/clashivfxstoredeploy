"use client"

import { useState, useRef, useEffect } from "react"
import { useTranslation } from "@/lib/i18n/use-translation"
import { Button } from "@/components/ui/button"
import { DollarSign } from "lucide-react"

export function CurrencySelector() {
  const { currency, setCurrency } = useTranslation()
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

  const selectCurrency = (curr: "USD" | "ARS") => {
    setCurrency(curr)
    setIsOpen(false) // Cerrar el menú después de seleccionar
  }

  return (
    <div className="relative inline-block">
      <Button
        ref={buttonRef}
        variant="outline"
        size="sm"
        className="text-cream border-orange-500/30 bg-[#0A0A0A] hover:bg-[#1A1A1A] min-w-[80px] sm:min-w-[100px] text-xs sm:text-sm"
        onClick={toggleMenu}
      >
        <DollarSign className="h-4 w-4 mr-1" />
        {currency}
      </Button>

      {isOpen && (
        <div
          ref={menuRef}
          className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 rounded-md shadow-lg bg-[#0A0A0A] border border-orange-500/30 z-50"
        >
          <div className="py-1">
            <button
              onClick={() => selectCurrency("USD")}
              className={`flex items-center gap-2 px-4 py-2 text-sm w-full text-left ${
                currency === "USD" ? "bg-[#1A1A1A]" : "hover:bg-[#1A1A1A]"
              } text-cream`}
            >
              <span className="text-base" role="img" aria-label="USD">
                🌎
              </span>
              USD (Internacional)
            </button>
            <button
              onClick={() => selectCurrency("ARS")}
              className={`flex items-center gap-2 px-4 py-2 text-sm w-full text-left ${
                currency === "ARS" ? "bg-[#1A1A1A]" : "hover:bg-[#1A1A1A]"
              } text-cream`}
            >
              <span className="text-base" role="img" aria-label="ARS">
                🇦🇷
              </span>
              ARS (Argentina)
            </button>
          </div>
        </div>
      )}
    </div>
  )
}


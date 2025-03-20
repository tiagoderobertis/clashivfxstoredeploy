"use client"

import { createContext, useState, useEffect, type ReactNode } from "react"
import enTranslations from "./translations/en"
import esTranslations from "./translations/es"

type Language = "en" | "es"
type Currency = "USD" | "ARS"
type Translations = typeof enTranslations

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  translations: Translations
  currency: Currency
  setCurrency: (currency: Currency) => void
}

export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  translations: enTranslations,
  currency: "USD",
  setCurrency: () => {},
})

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  // Try to get the language from localStorage, default to 'en'
  const [language, setLanguage] = useState<Language>("en")
  const [translations, setTranslations] = useState<Translations>(enTranslations)
  const [currency, setCurrency] = useState<Currency>("USD")

  useEffect(() => {
    // Check if we're in the browser
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as Language | null
      if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
        setLanguage(savedLanguage)
      }

      const savedCurrency = localStorage.getItem("currency") as Currency | null
      if (savedCurrency && (savedCurrency === "USD" || savedCurrency === "ARS")) {
        setCurrency(savedCurrency)
      }
    }
  }, [])

  useEffect(() => {
    // Update translations when language changes
    if (language === "en") {
      setTranslations(enTranslations)
    } else if (language === "es") {
      setTranslations(esTranslations)
    }

    // Save to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language)
    }
  }, [language])

  useEffect(() => {
    // Save currency to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("currency", currency)
    }
  }, [currency])

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
  }

  const handleSetCurrency = (newCurrency: Currency) => {
    setCurrency(newCurrency)
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        translations,
        currency,
        setCurrency: handleSetCurrency,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}


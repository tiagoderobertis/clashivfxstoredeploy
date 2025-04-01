"use client"

import { useContext } from "react"
import { LanguageContext } from "./language-context"

export function useTranslation() {
  const { language, setLanguage, translations, currency, setCurrency } = useContext(LanguageContext)

  // Function to get a translation by key path (e.g., "home.hero.title")
  const t = (keyPath: string, replacements?: Record<string, string>) => {
    try {
      const keys = keyPath.split(".")
      let value: any = translations

      // Navigate through the nested object
      for (const key of keys) {
        if (value && typeof value === "object" && key in value) {
          value = value[key]
        } else {
          console.warn(`Translation key not found: ${keyPath}`)
          return keyPath
        }
      }

      // If the value is not a string, return the key
      if (typeof value !== "string") {
        console.warn(`Translation value is not a string: ${keyPath}`)
        return keyPath
      }

      // Replace placeholders if replacements are provided
      if (replacements) {
        return Object.entries(replacements).reduce(
          (result, [key, replacement]) => result.replace(`{${key}}`, replacement),
          value,
        )
      }

      return value
    } catch (error) {
      console.error(`Error getting translation for ${keyPath}:`, error)
      return keyPath
    }
  }

  // Function to format price based on selected currency
  const formatPrice = (usdPrice: string) => {
    // Special case for the novice pack
    if (usdPrice === "$4.99" && currency === "ARS") {
      return "ARS $4999"
    }

    if (currency === "USD") {
      return usdPrice
    } else if (currency === "ARS") {
      // Convert USD to ARS (example exchange rate: 1 USD = 900 ARS)
      const numericValue = Number.parseFloat(usdPrice.replace("$", ""))
      const arsValue = numericValue * 900 // Example exchange rate
      return `ARS ${arsValue.toLocaleString("es-AR")}`
    }
    return usdPrice
  }

  return {
    language,
    setLanguage,
    t,
    currency,
    setCurrency,
    formatPrice,
  }
}


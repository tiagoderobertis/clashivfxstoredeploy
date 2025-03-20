"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { LanguageProvider } from "@/lib/i18n/language-context"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { LanguagePopup } from "@/components/language-popup"

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen pt-16">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <LanguagePopup />
      </div>
    </LanguageProvider>
  )
}


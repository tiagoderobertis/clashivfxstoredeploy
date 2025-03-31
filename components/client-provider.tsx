"use client"

import type React from "react"

import { LanguageProvider } from "@/lib/i18n/language-context"

export function ClientProvider({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>
}


"use client"

import type React from "react"
import { MouseGlow } from "@/components/shared/mouse-glow"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      <MouseGlow />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}


"use client"
import { HeroSection } from "@/components/home/hero-section"
import { CommunitySection } from "@/components/home/community-section"

export function ClientHome() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection />
        <CommunitySection />
      </main>
    </div>
  )
}


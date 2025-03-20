"use client"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturedProducts } from "@/components/home/featured-products"
import { CommunitySection } from "@/components/home/community-section"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export function ClientHome() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturedProducts />
      <CommunitySection />
      <Footer />
    </>
  )
}


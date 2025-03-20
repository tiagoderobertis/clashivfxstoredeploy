"use client"

import { ClientWrapper } from "@/components/client-wrapper"
import { FeaturedProducts } from "@/components/home/featured-products"
import { AboutSection } from "@/components/about/about-section"

export default function AboutClient() {
  return (
    <ClientWrapper>
      <FeaturedProducts />
      <AboutSection />
    </ClientWrapper>
  )
}


import type { Metadata } from "next"
import AboutClient from "./about-client"

export const metadata: Metadata = {
  title: "About | ClashiVFX",
  description: "Learn more about ClashiVFX and our professional video effects and presets.",
}

export default function AboutPage() {
  return <AboutClient />
}


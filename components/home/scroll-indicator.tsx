"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import { useTranslation } from "@/lib/i18n/use-translation"
import { useMobile } from "@/hooks/use-mobile"

interface ScrollIndicatorProps {
  targetId: string
}

export function ScrollIndicator({ targetId }: ScrollIndicatorProps) {
  const [isVisible, setIsVisible] = useState(true)
  const { t } = useTranslation()
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      // Hide the indicator when scrolled down more than 100px
      if (window.scrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTarget = () => {
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!isVisible) return null

  return (
    <div
      className={`fixed bottom-10 z-30 cursor-pointer animate-bounce-slow bg-discord-primary px-6 py-3 rounded-lg shadow-lg discord-container-glow ${
        isMobile ? "left-1/2 transform -translate-x-1/2" : "left-1/4 transform -translate-x-1/2"
      }`}
      onClick={scrollToTarget}
    >
      <div className="flex flex-col items-center">
        <span className="text-cream font-bold text-lg mb-1">Discord</span>
        <ChevronDown className="h-6 w-6 text-cream" />
      </div>
    </div>
  )
}


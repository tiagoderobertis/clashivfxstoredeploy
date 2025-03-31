"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useTranslation } from "@/lib/i18n/use-translation"
import { useState, useRef, useEffect } from "react"

export function HeroSection() {
  const { t } = useTranslation()
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  // ID del nuevo video
  const videoId = "aZVKFvUX1ns"

  // Detectar si es un dispositivo móvil
  useEffect(() => {
    const checkIfMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera
      return /iPhone|iPad|iPod|Android/i.test(userAgent)
    }

    setIsMobile(checkIfMobile())
  }, [])

  // Parámetros para el video de YouTube
  // Aseguramos calidad HD, loop, y deshabilitamos interacciones
  const youtubeParams = `?loop=1&playlist=${videoId}&controls=0&disablekb=1&fs=0&modestbranding=1&rel=0&showinfo=0&autoplay=1&mute=1&playsinline=1&iv_load_policy=3&vq=hd1080&enablejsapi=0`

  return (
    <div className="bg-gradient-to-b from-[#FF7200] via-[#331500] to-[#0A1929]">
      {/* Sección Hero */}
      <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-black/90 via-black/70 to-transparent">
        <div className="container px-4 md:px-6 py-8 md:py-12">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-cream">
                  {t("home.hero.title")}
                </h1>
                <p className="max-w-[600px] text-cream/80 md:text-xl">{t("home.hero.description")}</p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/store">
                  <button className="shop-now-button glow-button group relative inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-cream transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring overflow-hidden">
                    <span className="relative z-10 flex items-center gap-1">
                      {t("home.hero.shopNow")}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div
                ref={containerRef}
                className="rounded-lg overflow-hidden border shadow-lg w-full max-w-[550px] aspect-square relative youtube-container"
              >
                {/* Indicador de carga mientras el iframe se carga */}
                {!iframeLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                  </div>
                )}

                {/* YouTube iframe con parámetros personalizados */}
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}${youtubeParams}`}
                  title="Video effects preview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  onLoad={() => setIframeLoaded(true)}
                  style={{ border: "none" }}
                />

                {/* Capa adicional para dispositivos móviles que permite el scroll */}
                {isMobile && <div className="absolute inset-0 z-20" style={{ pointerEvents: "none" }}></div>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


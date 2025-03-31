"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"
import { useTranslation } from "@/lib/i18n/use-translation"
import { useEffect, useRef } from "react"

export function CommunitySection() {
  const { t } = useTranslation()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Configurar el canvas para que ocupe todo el contenedor
    const resizeCanvas = () => {
      const container = canvas.parentElement
      if (!container) return

      canvas.width = container.clientWidth
      canvas.height = container.clientHeight
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // Configuración de partículas
    const particleCount = 100
    const particles: {
      x: number
      y: number
      radius: number
      color: string
      speedX: number
      speedY: number
      opacity: number
    }[] = []

    // Colores de Discord
    const colors = ["#5865F2", "#57F287", "#FEE75C", "#EB459E", "#ED4245"]

    // Inicializar partículas
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    // Dibujar y animar partículas
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Dibujar gradiente de fondo
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "rgba(10, 25, 41, 0.9)")
      gradient.addColorStop(0.5, "rgba(26, 35, 126, 0.8)")
      gradient.addColorStop(1, "rgba(10, 25, 41, 0.9)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Dibujar partículas
      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle =
          particle.color +
          Math.floor(particle.opacity * 255)
            .toString(16)
            .padStart(2, "0")
        ctx.fill()

        // Mover partículas
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Rebote en los bordes
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1
        }
      })

      // Dibujar líneas entre partículas cercanas
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(88, 101, 242, ${0.2 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      animationRef.current = requestAnimationFrame(drawParticles)
    }

    drawParticles()

    // Limpiar
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <section
      id="community"
      className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-[#0A1929] to-black"
    >
      {/* Canvas para el fondo animado */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Overlay para mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent z-10"></div>

      <div className="container px-4 md:px-6 relative z-20">
        <div className="flex flex-col items-center justify-center space-y-8 text-center max-w-3xl mx-auto">
          {/* Título con efecto de resplandor sutil */}
          <h2 className="text-3xl font-bold tracking-tighter md:text-5xl/tight text-white drop-shadow-md">
            {t("home.community.title")}
          </h2>

          {/* Subtítulo */}
          <p className="text-white/90 md:text-xl/relaxed lg:text-xl/relaxed max-w-2xl">
            {t("home.community.description")}
          </p>

          {/* Beneficios con estilo de tarjeta */}
          <div className="border-l-4 border-discord-primary pl-4 py-2 max-w-2xl">
            <p className="text-white/90 text-lg">{t("home.community.benefits")}</p>
          </div>

          {/* Botón premium */}
          <div className="pt-6">
            <Link href="/community">
              <Button className="relative overflow-hidden bg-discord-primary text-white hover:bg-discord-primary/90 group text-lg px-8 py-6 h-auto transform transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <MessageCircle className="mr-3 h-5 w-5" />
                <span className="relative z-10 flex items-center gap-2 font-medium">
                  {t("home.community.joinDiscord")}
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}


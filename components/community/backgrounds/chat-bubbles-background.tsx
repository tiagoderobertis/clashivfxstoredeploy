"use client"

import { useEffect, useState } from "react"
import { MessageCircle, Heart, ThumbsUp, Star, Smile } from "lucide-react"

interface Bubble {
  id: number
  x: number
  y: number
  size: number
  speed: number
  opacity: number
  icon: string
}

const icons = ["message", "heart", "thumbsup", "star", "smile"]

export function ChatBubblesBackground() {
  const [bubbles, setBubbles] = useState<Bubble[]>([])

  useEffect(() => {
    // Crear burbujas iniciales
    const initialBubbles: Bubble[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: 100 + Math.random() * 20, // Empezar desde abajo
      size: 20 + Math.random() * 30,
      speed: 1 + Math.random() * 1.5, // Aumentado la velocidad base de 0.5 a 1 y el máximo de 1 a 1.5
      opacity: 0.3 + Math.random() * 0.7,
      icon: icons[Math.floor(Math.random() * icons.length)],
    }))

    setBubbles(initialBubbles)

    // Animar las burbujas
    const interval = setInterval(() => {
      setBubbles((prevBubbles) =>
        prevBubbles.map((bubble) => {
          // Mover hacia arriba - aumentado el factor de velocidad de 0.1 a 0.2
          const newY = bubble.y - bubble.speed * 0.2

          // Si la burbuja sale de la pantalla, reiniciarla desde abajo
          if (newY < -10) {
            return {
              ...bubble,
              y: 100 + Math.random() * 20,
              x: Math.random() * 100,
              icon: icons[Math.floor(Math.random() * icons.length)],
            }
          }

          return {
            ...bubble,
            y: newY,
            // Pequeño movimiento horizontal
            x: bubble.x + (Math.random() - 0.5) * 0.1,
          }
        }),
      )
    }, 50) // Mantenemos el intervalo en 50ms para una animación suave

    return () => clearInterval(interval)
  }, [])

  const renderIcon = (iconName: string, size: number) => {
    const props = { size, className: "text-discord-primary" }

    switch (iconName) {
      case "message":
        return <MessageCircle {...props} />
      case "heart":
        return <Heart {...props} />
      case "thumbsup":
        return <ThumbsUp {...props} />
      case "star":
        return <Star {...props} />
      case "smile":
        return <Smile {...props} />
      default:
        return <MessageCircle {...props} />
    }
  }

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-white/5 flex items-center justify-center"
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            opacity: bubble.opacity,
            transition: "top 0.5s linear, left 0.5s ease-in-out",
          }}
        >
          {renderIcon(bubble.icon, bubble.size * 0.6)}
        </div>
      ))}
    </div>
  )
}


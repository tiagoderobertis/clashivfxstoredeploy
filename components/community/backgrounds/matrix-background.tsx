"use client"

import { useEffect, useRef } from "react"

// Símbolos relacionados con la edición de video
const videoSymbols = [
  "▶",
  "⏸",
  "⏹",
  "⏪",
  "⏩",
  "⏮",
  "⏭",
  "⏺",
  "⏏",
  "00",
  "01",
  "24",
  "30",
  "60",
  "fps",
  "HD",
  "4K",
  "8K",
  "cut",
  "fx",
  "AE",
  "PR",
  "CC",
  "RGB",
  "HSL",
  "LUT",
]

export function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Ajustar el tamaño del canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Configuración de las columnas - reducir aún más la densidad
    const fontSize = 14
    const columnSpacing = fontSize * 4 // Más espacio entre columnas
    const columns = Math.ceil(canvas.width / columnSpacing)

    // Posición Y de cada columna
    const drops: number[] = Array(columns).fill(1)

    // Velocidades variables para cada columna - reducidas para ser más sutiles
    const speeds: number[] = Array(columns)
      .fill(0)
      .map(() => 0.2 + Math.random() * 0.5)

    // Función para obtener un símbolo aleatorio
    const getRandomSymbol = () => {
      return videoSymbols[Math.floor(Math.random() * videoSymbols.length)]
    }

    // Función para dibujar
    const draw = () => {
      // Fondo semitransparente para crear el efecto de desvanecimiento
      // Usamos una opacidad muy baja para que sea muy sutil
      ctx.fillStyle = "rgba(10, 25, 41, 0.02)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Configuración del texto
      ctx.font = `${fontSize}px monospace`

      // Dibujar los símbolos
      for (let i = 0; i < drops.length; i++) {
        // Solo dibujar algunos símbolos (reducir saturación aún más)
        if (Math.random() > 0.6) {
          // Seleccionar un símbolo aleatorio
          const symbol = getRandomSymbol()

          // Color del símbolo - variaciones de azul y morado de Discord con mucha menor opacidad
          const colors = [
            "rgba(88, 101, 242, 0.2)", // Discord primary
            "rgba(114, 137, 218, 0.2)", // Discord secondary
            "rgba(153, 170, 181, 0.2)", // Discord light
            "rgba(115, 138, 219, 0.2)", // Discord medium blue
          ]

          // Gradiente de opacidad basado en la posición
          const opacity = 0.2 - (drops[i] * fontSize) / (canvas.height * 2)
          ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)]

          // Dibujar el símbolo
          ctx.fillText(symbol, i * columnSpacing, drops[i] * fontSize)
        }

        // Mover la gota hacia abajo
        drops[i] += speeds[i]

        // Reiniciar la gota cuando llega al final o aleatoriamente
        if (drops[i] * fontSize > canvas.height || Math.random() > 0.995) {
          drops[i] = 0
        }
      }
    }

    // Iniciar la animación
    const interval = setInterval(draw, 80) // Reducir aún más la velocidad de actualización

    // Limpieza
    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  // Añadimos mix-blend-mode: screen para que se integre mejor con el fondo
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-2] pointer-events-none opacity-40"
      style={{ mixBlendMode: "screen" }}
    />
  )
}


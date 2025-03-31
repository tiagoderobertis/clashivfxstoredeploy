"use client"

import { useEffect, useState } from "react"

interface TimelineClip {
  id: number
  track: number
  start: number
  width: number
  color: string
  opacity: number
  name?: string
}

interface TimelineMarker {
  id: number
  position: number
  active: boolean
  time?: string
}

export function TimelineBackground() {
  const [clips, setClips] = useState<TimelineClip[]>([])
  const [markers, setMarkers] = useState<TimelineMarker[]>([])
  const [position, setPosition] = useState(0)

  const colors = ["bg-blue-500", "bg-purple-500", "bg-green-500", "bg-yellow-500", "bg-red-500", "bg-pink-500"]

  const trackNames = ["Video 1", "Video 2", "Audio", "Effects", "Text", "Transitions", "Color", "Masks"]

  useEffect(() => {
    // Generar clips aleatorios
    const numTracks = 8
    const initialClips: TimelineClip[] = []

    for (let track = 0; track < numTracks; track++) {
      let currentPos = -10 + Math.random() * 20

      while (currentPos < 110) {
        const clipWidth = 5 + Math.random() * 20
        initialClips.push({
          id: initialClips.length,
          track,
          start: currentPos,
          width: clipWidth,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: 0.3 + Math.random() * 0.5,
          name: Math.random() > 0.5 ? `Clip ${Math.floor(Math.random() * 100)}` : undefined,
        })

        currentPos += clipWidth + 1 + Math.random() * 5
      }
    }

    setClips(initialClips)

    // Generar marcadores de tiempo
    const initialMarkers: TimelineMarker[] = Array.from({ length: 20 }, (_, i) => {
      const pos = i * 5 + Math.random() * 2
      return {
        id: i,
        position: pos,
        active: Math.random() > 0.7,
        time: formatTime(pos),
      }
    })

    setMarkers(initialMarkers)

    // Animar la línea de tiempo
    const interval = setInterval(() => {
      setPosition((prev) => {
        const newPos = prev + 0.05 // Movimiento más lento
        return newPos > 20 ? -100 : newPos
      })

      // Activar/desactivar marcadores aleatoriamente
      setMarkers((prev) =>
        prev.map((marker) => ({
          ...marker,
          active: Math.random() > 0.95 ? !marker.active : marker.active,
        })),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  // Función para formatear tiempo (00:00:00)
  const formatTime = (position: number): string => {
    const totalSeconds = Math.floor(position * 10)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    const frames = Math.floor(Math.random() * 30)
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${frames.toString().padStart(2, "0")}`
  }

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none flex flex-col justify-center">
      <div className="relative w-full h-full">
        {/* Fondo de la línea de tiempo */}
        <div className="absolute inset-0 bg-discord-nightBlue/30"></div>

        {/* Regla de tiempo */}
        <div className="absolute w-full h-[20px] top-[10%] bg-discord-dark/50 border-b border-discord-primary/20">
          {markers.map((marker) => (
            <div
              key={marker.id}
              className="absolute flex flex-col items-center"
              style={{
                left: `${marker.position + position}%`,
              }}
            >
              <div className={`w-[1px] h-[10px] ${marker.active ? "bg-discord-primary" : "bg-discord-primary/30"}`} />
              {marker.position % 10 < 1 && (
                <span className="text-[8px] text-discord-primary/70 mt-1">{marker.time}</span>
              )}
            </div>
          ))}
        </div>

        {/* Nombres de las pistas */}
        <div className="absolute left-0 top-[calc(15%+10px)] h-[65%] w-[80px] bg-discord-dark/50 border-r border-discord-primary/20">
          {trackNames.map((name, i) => (
            <div
              key={i}
              className="absolute left-0 h-[8%] w-full px-2 flex items-center text-[10px] text-discord-primary/70 border-b border-discord-primary/10"
              style={{
                top: `${i * 8}%`,
              }}
            >
              {name}
            </div>
          ))}
        </div>

        {/* Tracks */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-[8%] bg-discord-dark/30 border-b border-discord-primary/10"
            style={{
              top: `${15 + 10 + i * 8}%`,
              left: "80px",
            }}
          />
        ))}

        {/* Clips */}
        {clips.map((clip) => (
          <div
            key={clip.id}
            className={`absolute h-[6%] rounded ${clip.color} flex items-center justify-center overflow-hidden`}
            style={{
              left: `${clip.start + position + 80}px`,
              top: `${15 + 10 + clip.track * 8 + 1}%`,
              width: `${clip.width}%`,
              opacity: clip.opacity,
            }}
          >
            {clip.name && <span className="text-[8px] text-white font-bold px-1 truncate">{clip.name}</span>}
          </div>
        ))}

        {/* Playhead */}
        <div className="absolute h-[70%] w-[2px] bg-white/70 z-10 top-[15%]" style={{ left: "50%" }}>
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-white/70 relative left-[-5px] top-[-6px]"></div>
        </div>

        {/* Controles de la línea de tiempo */}
        <div className="absolute bottom-[10%] left-0 right-0 h-[30px] bg-discord-dark/50 flex items-center justify-center">
          <div className="flex space-x-4">
            {["◀◀", "◀", "■", "▶", "▶▶"].map((control, i) => (
              <div
                key={i}
                className="w-[20px] h-[20px] bg-discord-primary/20 flex items-center justify-center text-[10px] text-discord-primary rounded-sm"
              >
                {control}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


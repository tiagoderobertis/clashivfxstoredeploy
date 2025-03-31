"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "./backgrounds/particles-background"
import { SimpleParticlesBackground } from "./backgrounds/simple-particles-background"
import { ChatBubblesBackground } from "./backgrounds/chat-bubbles-background"
import { GeometricMeshBackground } from "./backgrounds/geometric-mesh-background"
import { MatrixBackground } from "./backgrounds/matrix-background"

type BackgroundType = "particles" | "simple-particles" | "chat-bubbles" | "geometric-mesh" | "matrix" | "none"

export function BackgroundSelector() {
  const [activeBackground, setActiveBackground] = useState<BackgroundType>("none")

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-[#0A0A0A] border border-discord-primary/30 rounded-lg shadow-lg p-2">
        <div className="flex flex-col gap-2">
          <Button
            size="sm"
            variant={activeBackground === "particles" ? "default" : "outline"}
            className={activeBackground === "particles" ? "bg-discord-primary" : "border-discord-primary/30"}
            onClick={() => setActiveBackground(activeBackground === "particles" ? "none" : "particles")}
          >
            Partículas
          </Button>
          <Button
            size="sm"
            variant={activeBackground === "simple-particles" ? "default" : "outline"}
            className={activeBackground === "simple-particles" ? "bg-discord-primary" : "border-discord-primary/30"}
            onClick={() => setActiveBackground(activeBackground === "simple-particles" ? "none" : "simple-particles")}
          >
            Partículas Simple
          </Button>
          <Button
            size="sm"
            variant={activeBackground === "chat-bubbles" ? "default" : "outline"}
            className={activeBackground === "chat-bubbles" ? "bg-discord-primary" : "border-discord-primary/30"}
            onClick={() => setActiveBackground(activeBackground === "chat-bubbles" ? "none" : "chat-bubbles")}
          >
            Burbujas
          </Button>
          <Button
            size="sm"
            variant={activeBackground === "geometric-mesh" ? "default" : "outline"}
            className={activeBackground === "geometric-mesh" ? "bg-discord-primary" : "border-discord-primary/30"}
            onClick={() => setActiveBackground(activeBackground === "geometric-mesh" ? "none" : "geometric-mesh")}
          >
            Malla 3D
          </Button>
          <Button
            size="sm"
            variant={activeBackground === "matrix" ? "default" : "outline"}
            className={activeBackground === "matrix" ? "bg-discord-primary" : "border-discord-primary/30"}
            onClick={() => setActiveBackground(activeBackground === "matrix" ? "none" : "matrix")}
          >
            Matrix
          </Button>
        </div>
      </div>

      {activeBackground === "particles" && <ParticlesBackground />}
      {activeBackground === "simple-particles" && <SimpleParticlesBackground />}
      {activeBackground === "chat-bubbles" && <ChatBubblesBackground />}
      {activeBackground === "geometric-mesh" && <GeometricMeshBackground />}
      {activeBackground === "matrix" && <MatrixBackground />}
    </div>
  )
}


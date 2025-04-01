"use client"

import { useState, useEffect } from "react"
import { Sparkles, MessageCircle, Grid3X3, X } from "lucide-react"
import { ParticlesBackground } from "./backgrounds/particles-background"
import { SimpleParticlesBackground } from "./backgrounds/simple-particles-background"
import { ChatBubblesBackground } from "./backgrounds/chat-bubbles-background"
import { GeometricMeshBackground } from "./backgrounds/geometric-mesh-background"

type BackgroundType = "particles" | "simple-particles" | "chat-bubbles" | "geometric-mesh" | "none"

export function DiscordBackgroundSelector() {
  // Set geometric-mesh as the default background
  const [activeBackground, setActiveBackground] = useState<BackgroundType>("geometric-mesh")
  const [isOpen, setIsOpen] = useState(false)

  // Initialize with geometric-mesh background
  useEffect(() => {
    // This ensures the background is set on initial render
    setActiveBackground("geometric-mesh")
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const selectBackground = (type: BackgroundType) => {
    setActiveBackground(activeBackground === type ? "none" : type)
    // Close menu after selection for better UX
    setIsOpen(false)
  }

  return (
    <>
      {/* Modern, minimalist selector button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {/* Background selector menu - redesigned to be more modern and minimalist */}
        {isOpen && (
          <div className="mb-4 bg-black/80 backdrop-blur-md border border-discord-primary/20 rounded-xl shadow-lg p-3 animate-in fade-in slide-in-from-bottom-5 duration-200">
            <div className="flex items-center justify-between mb-2 px-2">
              <span className="text-xs font-medium text-white/80">Background</span>
              <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="flex gap-2 p-1">
              <button
                onClick={() => selectBackground("geometric-mesh")}
                className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all ${
                  activeBackground === "geometric-mesh"
                    ? "bg-discord-primary text-white"
                    : "bg-black/50 text-white/70 hover:bg-black/70"
                }`}
                title="3D Mesh"
              >
                <Grid3X3 className="h-5 w-5" />
              </button>

              <button
                onClick={() => selectBackground("particles")}
                className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all ${
                  activeBackground === "particles"
                    ? "bg-discord-primary text-white"
                    : "bg-black/50 text-white/70 hover:bg-black/70"
                }`}
                title="Particles"
              >
                <Sparkles className="h-5 w-5" />
              </button>

              <button
                onClick={() => selectBackground("simple-particles")}
                className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all ${
                  activeBackground === "simple-particles"
                    ? "bg-discord-primary text-white"
                    : "bg-black/50 text-white/70 hover:bg-black/70"
                }`}
                title="Simple Particles"
              >
                <Sparkles className="h-4 w-4" />
              </button>

              <button
                onClick={() => selectBackground("chat-bubbles")}
                className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all ${
                  activeBackground === "chat-bubbles"
                    ? "bg-discord-primary text-white"
                    : "bg-black/50 text-white/70 hover:bg-black/70"
                }`}
                title="Chat Bubbles"
              >
                <MessageCircle className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}

        {/* Toggle button */}
        <button
          onClick={toggleMenu}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-black/80 backdrop-blur-md border border-discord-primary/20 shadow-lg hover:bg-black/90 transition-all"
        >
          <Grid3X3 className={`h-6 w-6 ${activeBackground === "none" ? "text-white/70" : "text-discord-primary"}`} />
        </button>
      </div>

      {/* Render the selected background */}
      {activeBackground === "particles" && <ParticlesBackground />}
      {activeBackground === "simple-particles" && <SimpleParticlesBackground />}
      {activeBackground === "chat-bubbles" && <ChatBubblesBackground />}
      {activeBackground === "geometric-mesh" && <GeometricMeshBackground />}
    </>
  )
}


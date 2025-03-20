"use client"

import { useState } from "react"
import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n/use-translation"
import { motion } from "framer-motion"

export function ContactSection() {
  const { t } = useTranslation()
  const [isHovering, setIsHovering] = useState(false)

  return (
    <section className="w-full min-h-[calc(100vh-64px)] flex items-center justify-center bg-gradient-to-b from-black via-discord-nightBlue to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-discord-primary/30"
              style={{
                width: `${20 + Math.random() * 80}px`,
                height: `${20 + Math.random() * 80}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${15 + Math.random() * 15}s infinite ease-in-out ${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-10 text-center max-w-4xl mx-auto">
          {/* Main heading with animation - Ahora usando el sistema de traducción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
              <span className="block">{t("contact.heading.part1")}</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-discord-primary to-purple-500">
                {t("contact.heading.part2")}
              </span>
            </h1>
            <p className="max-w-[700px] mx-auto text-white/80 text-xl md:text-2xl">{t("contact.description")}</p>
          </motion.div>

          {/* Instagram button with hover effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-discord-primary rounded-xl blur-xl transition-opacity duration-500 ${isHovering ? "opacity-70" : "opacity-30"}`}
              style={{ transform: "scale(0.85)" }}
            ></div>
            <a
              href="https://instagram.com/clashivfx"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="relative block"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-600 to-discord-primary hover:from-pink-500 hover:to-discord-secondary text-white text-xl py-8 px-10 rounded-xl transform transition-transform duration-300 hover:scale-105"
              >
                <Instagram className="mr-3 h-6 w-6" />
                @clashivfx
              </Button>
            </a>
          </motion.div>

          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-white/60 max-w-md text-center"
          >
            <p>{t("contact.response")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


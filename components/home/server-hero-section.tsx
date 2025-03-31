import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function ServerHeroSection() {
  // ID del nuevo video
  const videoId = "aZVKFvUX1ns"

  return (
    <section className="w-full min-h-[calc(100vh-64px)] flex items-center justify-center bg-orange-gradient">
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-cream">
                Optimize Your Video Editing Workflow
              </h1>
              <p className="max-w-[600px] text-cream/80 md:text-xl">
                Professional effects presets and plugins for After Effects. One-click application to enhance your
                videos.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/store">
                <button className="shop-now-button glow-button group relative inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-cream transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring overflow-hidden">
                  <span className="relative z-10 flex items-center gap-1">
                    Shop Now
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="rounded-lg overflow-hidden border shadow-lg w-full max-w-[550px] aspect-square relative">
              {/* Placeholder para el servidor */}
              <div className="absolute inset-0 bg-black flex items-center justify-center">
                <span className="text-white/50 text-sm">Video preview</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


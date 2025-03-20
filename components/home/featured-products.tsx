import { Play, ExternalLink } from "lucide-react"
import { useTranslation } from "@/lib/i18n/use-translation"

export function FeaturedProducts() {
  const { t } = useTranslation()

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-black to-[#030303] overflow-hidden">
      {/* Título con color crema sin efecto neón */}
      <div className="container px-4 md:px-6 py-10 text-center">
        <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-cream">
          CLASHIVFX
        </h2>
      </div>

      {/* Texto "MY BEST WORKS!" estático y centrado */}
      <div className="container px-4 md:px-6 py-8 text-center">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-500 tracking-wide">
          {t("home.featured.bestWorks")}
        </p>
      </div>

      {/* Botón moderno y llamativo */}
      <div className="container px-4 md:px-6 py-10 text-center">
        <a
          href="https://www.youtube.com/playlist?list=PLE3AyUAb-9ISDioqD_EtlENDrS_1es4oU"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <button className="modern-button group">
            <span className="button-content">
              <Play className="mr-3 h-7 w-7" />
              {t("home.featured.seeNow")}
              <ExternalLink className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </button>
        </a>
      </div>
    </section>
  )
}


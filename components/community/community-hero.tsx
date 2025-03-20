import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { useTranslation } from "@/lib/i18n/use-translation"
import { DiscordBackgroundSelector } from "@/components/community/discord-background-selector"

export function CommunityHero() {
  const { t } = useTranslation()

  return (
    <section className="w-full h-[calc(100vh-64px)] flex items-center justify-center bg-discord-nightBlue relative overflow-hidden">
      {/* Fondo con gradiente más oscuro para mejor contraste con los efectos de fondo */}
      <div className="absolute inset-0 bg-night-blue-gradient opacity-70 z-[-1]"></div>

      {/* Contenido principal con z-index para asegurar que esté por encima del fondo */}
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
              {t("community.hero.title")}
            </h1>
            <p className="max-w-[700px] mx-auto text-white/90 md:text-xl/relaxed">{t("community.hero.description")}</p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <a href="https://discord.com/invite/zYE9ztWfan" target="_blank" rel="noopener noreferrer">
              <Button className="bg-discord-primary text-white hover:bg-discord-primary/90 group">
                <MessageCircle className="mr-2 h-4 w-4" />
                {t("community.hero.joinDiscord")}
              </Button>
            </a>
          </div>
        </div>
      </div>
      <DiscordBackgroundSelector />
    </section>
  )
}


import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"
import { useTranslation } from "@/lib/i18n/use-translation"

export function CommunitySection() {
  const { t } = useTranslation()

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-black-to-blue-gradient">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
              {t("home.community.title")}
            </h2>
            <p className="max-w-[900px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("home.community.description")}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            {/* Corrigiendo la imagen de Discord */}
            <div className="w-full h-[300px] relative mx-auto lg:mx-0">
              <Image
                src="/images/discord-logo-3d.webp"
                alt="Discord community"
                fill
                className="rounded-lg object-contain"
                priority
              />
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <div className="space-y-2">
              <p className="text-white/90">{t("home.community.benefits")}</p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
              <Link href="/community">
                <Button className="bg-discord-primary text-white hover:bg-discord-primary/90 group">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  <span className="relative z-10 flex items-center gap-1">
                    {t("home.community.joinDiscord")}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


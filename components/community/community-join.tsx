import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { useTranslation } from "@/lib/i18n/use-translation"

export function CommunityJoin() {
  const { t } = useTranslation()

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-discord-gradient">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">{t("community.join.title")}</h2>
            <p className="max-w-[700px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("community.join.description")}
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <a href="https://discord.com/invite/zYE9ztWfan" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-discord-primary hover:bg-white/90">
                <MessageCircle className="mr-2 h-4 w-4" />
                {t("community.join.notified")}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


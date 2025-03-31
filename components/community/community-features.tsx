import { Users, MessageSquare, FileText, Calendar } from "lucide-react"
import { useTranslation } from "@/lib/i18n/use-translation"

export function CommunityFeatures() {
  const { t } = useTranslation()

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-discord-dark">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
              {t("community.features.title")}
            </h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center space-y-2 rounded-lg border border-discord-secondary/20 bg-discord-dark/50 p-6 shadow-sm">
            <div className="rounded-full bg-discord-primary p-3">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">{t("community.features.collaboration.title")}</h3>
            <p className="text-white/80 text-center">{t("community.features.collaboration.description")}</p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border border-discord-secondary/20 bg-discord-dark/50 p-6 shadow-sm">
            <div className="rounded-full bg-discord-primary p-3">
              <MessageSquare className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">{t("community.features.feedback.title")}</h3>
            <p className="text-white/80 text-center">{t("community.features.feedback.description")}</p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border border-discord-secondary/20 bg-discord-dark/50 p-6 shadow-sm">
            <div className="rounded-full bg-discord-primary p-3">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">{t("community.features.resources.title")}</h3>
            <p className="text-white/80 text-center">{t("community.features.resources.description")}</p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border border-discord-secondary/20 bg-discord-dark/50 p-6 shadow-sm">
            <div className="rounded-full bg-discord-primary p-3">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">{t("community.features.events.title")}</h3>
            <p className="text-white/80 text-center">{t("community.features.events.description")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}


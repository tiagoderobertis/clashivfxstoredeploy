import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n/use-translation"

export function ComingSoon() {
  const { t } = useTranslation()

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-[#1A237E] to-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-cream">
              {t("home.comingSoon.title")}
            </h2>
            <p className="max-w-[900px] text-cream/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("home.comingSoon.description")}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <Image
              src="/placeholder.svg?height=300&width=400"
              width={400}
              height={300}
              alt="Upcoming product preview"
              className="rounded-lg object-cover border shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-cream">{t("home.comingSoon.moreProducts")}</h3>
              <p className="text-cream/80">{t("home.comingSoon.stayTuned")}</p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="btn-primary">{t("home.comingSoon.getNotified")}</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


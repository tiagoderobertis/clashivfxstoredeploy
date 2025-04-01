import { useTranslation } from "@/lib/i18n/use-translation"

export function AboutSection() {
  const { t } = useTranslation()

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-[#030303] to-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-cream">{t("about.title")}</h2>
            <p className="max-w-[900px] text-cream/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("about.subtitle")}
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl mt-12">
          <div className="prose prose-lg prose-invert">
            <p>{t("about.paragraph1")}</p>
            <p>{t("about.paragraph2")}</p>
            <p>{t("about.paragraph3")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}


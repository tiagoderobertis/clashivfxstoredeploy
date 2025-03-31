import Link from "next/link"
import { useTranslation } from "@/lib/i18n/use-translation"

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full border-t border-orange-500/20 px-4 md:px-6 bg-[#060606]">
      <p className="text-xs text-cream/80">{t("footer.rights")}</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link href="#" className="text-xs hover:underline underline-offset-4 text-cream">
          {t("footer.terms")}
        </Link>
        <Link href="#" className="text-xs hover:underline underline-offset-4 text-cream">
          {t("footer.privacy")}
        </Link>
      </nav>
    </footer>
  )
}


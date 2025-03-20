import Link from "next/link"
import { NAVIGATION_ITEMS } from "@/lib/constants"

export function ServerHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-16 flex items-center justify-between bg-[#060606] border-b border-orange-500/20">
      <Link href="/" className="flex items-center gap-2 font-bold text-xl text-cream">
        <span>ClashiVFX</span>
      </Link>

      {/* Añadir navegación básica */}
      <nav className="hidden md:flex items-center gap-6">
        {NAVIGATION_ITEMS.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-sm font-medium hover:underline underline-offset-4 text-cream"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  )
}


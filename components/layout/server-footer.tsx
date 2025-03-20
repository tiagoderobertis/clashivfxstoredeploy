import Link from "next/link"

export function ServerFooter() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full border-t border-orange-500/20 px-4 md:px-6 bg-[#060606]">
      <p className="text-xs text-cream/80">© 2025 ClashiVFX. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link href="#" className="text-xs hover:underline underline-offset-4 text-cream">
          Terms of Service
        </Link>
        <Link href="#" className="text-xs hover:underline underline-offset-4 text-cream">
          Privacy
        </Link>
      </nav>
    </footer>
  )
}


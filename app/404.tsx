import Link from "next/link"

export default function Custom404() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex items-center justify-center bg-orange-gradient">
        <div className="container px-4 md:px-6 py-16 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-cream">404 - Página No Encontrada</h1>
          <p className="mt-4 text-cream/80">La página que estás buscando no existe o ha sido movida.</p>
          <div className="mt-8">
            <Link
              href="/"
              className="shop-now-button glow-button group relative inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-cream transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring overflow-hidden"
            >
              <span className="relative z-10">Volver al Inicio</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}


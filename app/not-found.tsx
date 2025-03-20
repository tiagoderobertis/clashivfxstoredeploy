import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex items-center justify-center bg-orange-gradient">
        <div className="container px-4 md:px-6 py-16 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-cream">404 - Page Not Found</h1>
          <p className="mt-4 text-cream/80">The page you are looking for doesn't exist or has been moved.</p>
          <div className="mt-8">
            <Link
              href="/"
              className="shop-now-button glow-button group relative inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-cream transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring overflow-hidden"
            >
              <span className="relative z-10">Return to Home</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}


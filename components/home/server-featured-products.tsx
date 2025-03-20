import Link from "next/link"
import { Zap, Package, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ServerFeaturedProducts() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-cream">Featured Products</h2>
            <p className="max-w-[900px] text-cream/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Enhance your videos with our professional presets and overlays
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Zap className="h-6 w-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-cream">After Effects Shake Presets</h3>
              <p className="text-cream/80">
                Complete package of shake presets for After Effects. Add dynamic movement to your videos with a single
                click.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Package className="h-6 w-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-cream">3D Text Presets</h3>
              <p className="text-cream/80">
                3D text preset package with Element 3D plugin for After Effects. Create stunning 3D text effects easily.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Clock className="h-6 w-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-cream">Time-Saving Plugins</h3>
              <p className="text-cream/80">
                Exclusive plugins to optimize your editing time. Streamline your workflow and focus on creativity.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Link href="/store">
            <Button size="lg" className="btn-primary">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}


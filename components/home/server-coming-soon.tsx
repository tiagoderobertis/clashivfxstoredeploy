import Image from "next/image"
import { Button } from "@/components/ui/button"

export function ServerComingSoon() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-orange-gradient">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-cream">Coming Soon</h2>
            <p className="max-w-[900px] text-cream/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We're constantly developing new products to help you create amazing videos
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
              <h3 className="text-xl font-bold text-cream">More Products Coming Soon</h3>
              <p className="text-cream/80">
                Stay tuned for new effect packages, overlays, transitions, and exclusive plugins to take your video
                editing to the next level.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="btn-primary">Get Notified</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


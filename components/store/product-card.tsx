import Image from "next/image"
import { ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { Product } from "@/types"
import { useTranslation } from "@/lib/i18n/use-translation"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { t, formatPrice } = useTranslation()

  return (
    <Card className="flex flex-col h-full bg-[#0A0A0A] border-orange-500/30 transform scale-80 origin-top-left">
      <CardHeader className="p-0">
        <div className="relative h-40 w-full">
          {" "}
          {/* Reducido de h-48 a h-40 */}
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            fill
            className="object-cover rounded-t-lg"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-4">
        {" "}
        {/* Reducido de p-6 a p-4 */}
        <CardTitle className="text-lg text-cream">
          {" "}
          {/* Reducido de text-xl a text-lg */}
          {product.title}
        </CardTitle>
        <CardDescription className="mt-1 text-sm text-cream/80">
          {" "}
          {/* Reducido de mt-2 a mt-1 y tamaño de texto */}
          {product.description}
        </CardDescription>
        <div className="mt-3 flex items-center">
          {" "}
          {/* Reducido de mt-4 a mt-3 */}
          <Star className="h-3 w-3 fill-primary text-primary" /> {/* Reducido de h-4 w-4 a h-3 w-3 */}
          <Star className="h-3 w-3 fill-primary text-primary" />
          <Star className="h-3 w-3 fill-primary text-primary" />
          <Star className="h-3 w-3 fill-primary text-primary" />
          <Star className="h-3 w-3 fill-primary text-primary" />
          <span className="ml-1 text-xs text-cream/80">(24 {t("store.products.reviews")})</span>{" "}
          {/* Reducido de text-sm a text-xs */}
        </div>
        <div className="mt-3">
          {" "}
          {/* Reducido de mt-4 a mt-3 */}
          <h4 className="font-semibold mb-1 text-sm text-cream">{t("store.products.features")}</h4>{" "}
          {/* Reducido de mb-2 a mb-1 */}
          <ul className="list-disc pl-4 space-y-0.5 text-xs text-cream/90">
            {" "}
            {/* Reducido de pl-5 a pl-4 y espacio */}
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 mt-auto">
        {" "}
        {/* Reducido de p-6 a p-4 */}
        <div className="flex items-center justify-between w-full">
          <div className="text-xl font-bold text-cream">{formatPrice(product.price)}</div>{" "}
          {/* Reducido de text-2xl a text-xl */}
          <Button className="btn-primary group text-xs py-1 px-3">
            {" "}
            {/* Reducido el tamaño del botón */}
            {t("store.products.addToCart")}
            <ArrowRight className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />{" "}
            {/* Reducido de h-4 w-4 a h-3 w-3 */}
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}


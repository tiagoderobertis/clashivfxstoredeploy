"use client"

import { useEffect, useRef, useState } from "react"
import { Star, StarHalf } from "lucide-react"
import { useTranslation } from "@/lib/i18n/use-translation"

// Colores para los avatares
const avatarColors = [
  "#FF7200", // Naranja (primario)
  "#5865F2", // Azul Discord
  "#7289DA", // Azul Discord secundario
  "#FF4D4D", // Rojo
  "#4CAF50", // Verde
  "#9C27B0", // Púrpura
  "#2196F3", // Azul
  "#FFEB3B", // Amarillo
  "#FF9800", // Naranja
  "#00BCD4", // Cian
  "#795548", // Marrón
  "#607D8B", // Gris azulado
  "#E91E63", // Rosa
  "#673AB7", // Violeta
  "#3F51B5", // Índigo
  "#009688", // Verde azulado
  "#FFC107", // Ámbar
  "#8BC34A", // Verde claro
]

// Datos estáticos para las reseñas
const reviewData = [
  { id: 1, name: "KevFilmmaker", roleKey: "director", rating: 5, commentId: "review1" },
  { id: 2, name: "AnaVFX", roleKey: "vfxSupervisor", rating: 4.5, commentId: "review2" },
  { id: 3, name: "MotionMaster", roleKey: "motionDesigner", rating: 5, commentId: "review3" },
  { id: 4, name: "EditPro_Sara", roleKey: "editor", rating: 4.5, commentId: "review4" },
  { id: 5, name: "VFX_Wizard", roleKey: "vfxArtist", rating: 5, commentId: "review5" },
  { id: 6, name: "CinematicJuan", roleKey: "cinematographer", rating: 5, commentId: "review6" },
  { id: 7, name: "AfterEffectsQueen", roleKey: "aeSpecialist", rating: 5, commentId: "review7" },
  { id: 8, name: "TransitionKing", roleKey: "transitionEditor", rating: 4.5, commentId: "review8" },
]

export function FixedReviewCarousel() {
  const { t } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [reviews, setReviews] = useState<any[]>([])
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Inicializar las reseñas con colores asignados
  useEffect(() => {
    const initialReviews = reviewData.map((review, index) => ({
      ...review,
      color: avatarColors[index % avatarColors.length],
    }))
    setReviews(initialReviews)
  }, [])

  // Configurar el intervalo para cambiar las reseñas
  useEffect(() => {
    if (reviews.length === 0) return

    // Función para avanzar al siguiente conjunto de reseñas
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (reviews.length - 2 + 1))
    }

    // Iniciar el intervalo
    intervalRef.current = setInterval(nextSlide, 3000)

    // Limpiar el intervalo al desmontar
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [reviews])

  // Función para renderizar las estrellas según la calificación
  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    // Estrellas completas
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="h-4 w-4 fill-primary text-primary" />)
    }

    // Media estrella si es necesario
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="h-4 w-4 fill-primary text-primary" />)
    }

    return stars
  }

  // Función para generar avatar con inicial y color
  const renderAvatar = (name: string, color: string) => {
    const initial = name.charAt(0).toUpperCase()

    return (
      <div
        className="relative h-12 w-12 rounded-full overflow-hidden mr-4 flex items-center justify-center text-white font-bold text-lg"
        style={{ backgroundColor: color }}
      >
        {initial}
      </div>
    )
  }

  // Si aún no tenemos reseñas, mostrar un espacio reservado
  if (reviews.length === 0) {
    return null
  }

  // Mostrar 3 reseñas a la vez en pantallas medianas y grandes, 1 en móviles
  const visibleReviews = window.innerWidth >= 768 ? 3 : 1
  const displayedReviews = reviews.slice(currentIndex, currentIndex + visibleReviews)

  // Si no hay suficientes reseñas para llenar la vista, agregar desde el principio
  if (displayedReviews.length < visibleReviews) {
    displayedReviews.push(...reviews.slice(0, visibleReviews - displayedReviews.length))
  }

  return (
    <div className="py-10 bg-[#050505]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-cream">{t("store.reviews.title")}</h2>
        <p className="text-cream/80 text-center max-w-2xl mx-auto mb-10">{t("store.reviews.subtitle")}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayedReviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#0A0A0A] rounded-lg p-6 border border-orange-500/30 transition-all duration-300 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10"
            >
              <div className="flex items-center mb-4">
                {renderAvatar(review.name, review.color)}
                <div>
                  <h3 className="font-medium text-cream">{review.name}</h3>
                  <p className="text-sm text-cream/70">{t(`store.reviews.roles.${review.roleKey}`)}</p>
                </div>
              </div>
              <div className="flex mb-3">{renderStars(review.rating)}</div>
              <p className="text-cream/80 text-sm">{t(`store.reviews.comments.${review.commentId}`)}</p>
            </div>
          ))}
        </div>

        {/* Indicadores de paginación */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: reviews.length - visibleReviews + 1 }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index ? "bg-primary w-4" : "bg-cream/30"
              }`}
              onClick={() => {
                setCurrentIndex(index)
                // Reiniciar el intervalo al hacer clic
                if (intervalRef.current) {
                  clearInterval(intervalRef.current)
                  intervalRef.current = setInterval(() => {
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % (reviews.length - visibleReviews + 1))
                  }, 3000)
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}


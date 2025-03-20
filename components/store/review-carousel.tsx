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
  { id: 9, name: "RenderMaster", roleKey: "animator", rating: 5, commentId: "review9" },
  { id: 10, name: "ColorGrader_Pro", roleKey: "colorist", rating: 4.5, commentId: "review10" },
  { id: 11, name: "VisualStudio404", roleKey: "contentCreator", rating: 5, commentId: "review11" },
  { id: 12, name: "EffectsNinja", roleKey: "vfxArtist", rating: 5, commentId: "review12" },
  { id: 13, name: "PostProduction_Master", roleKey: "postSupervisor", rating: 4.5, commentId: "review13" },
  { id: 14, name: "MotionTracker", roleKey: "trackingSpecialist", rating: 5, commentId: "review14" },
  { id: 15, name: "ShakeEffectPro", roleKey: "actionEditor", rating: 5, commentId: "review15" },
  { id: 16, name: "TextAnimator", roleKey: "titleDesigner", rating: 4.5, commentId: "review16" },
  { id: 17, name: "VloggerPro", roleKey: "youtuber", rating: 5, commentId: "review17" },
  { id: 18, name: "FilmmakerDreams", roleKey: "indieDirector", rating: 5, commentId: "review18" },
]

export function ReviewCarousel() {
  const { t } = useTranslation()
  const carouselRef = useRef<HTMLDivElement>(null)
  const [randomizedReviews, setRandomizedReviews] = useState<any[]>([])
  const hasInitialized = useRef(false)

  // Función para aleatorizar un array (algoritmo Fisher-Yates)
  const shuffleArray = (array: any[]) => {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
  }

  // Inicializar las reseñas solo una vez al montar el componente
  useEffect(() => {
    if (hasInitialized.current) return

    // Crear reseñas con colores asignados
    const reviews = reviewData.map((review, index) => ({
      ...review,
      color: avatarColors[index % avatarColors.length],
    }))

    // Aleatorizar y guardar
    setRandomizedReviews(shuffleArray(reviews))
    hasInitialized.current = true
  }, [])

  // Efecto para el desplazamiento automático continuo
  useEffect(() => {
    if (!carouselRef.current || randomizedReviews.length === 0) return

    const carousel = carouselRef.current
    const scrollSpeed = 0.5 // Velocidad reducida para mejor compatibilidad con iOS
    let animationFrameId: number
    let lastTimestamp = 0
    let isPaused = false

    // Detectar si es iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream

    // Función para manejar el desplazamiento con requestAnimationFrame
    const scroll = (timestamp: number) => {
      if (!carousel) return

      // No hacer nada si está pausado
      if (isPaused) {
        animationFrameId = requestAnimationFrame(scroll)
        return
      }

      // Calcular delta time para movimiento suave en todos los dispositivos
      if (!lastTimestamp) lastTimestamp = timestamp
      const deltaTime = timestamp - lastTimestamp
      lastTimestamp = timestamp

      // Incrementar la posición de desplazamiento basado en deltaTime para consistencia
      const increment = (scrollSpeed * deltaTime) / 16 // Normalizado a ~60fps

      // Usar transform en lugar de scrollLeft para iOS
      if (isIOS) {
        // Obtener el estilo de transformación actual
        const currentTransform = carousel.style.transform || "translateX(0px)"
        const currentX = Number.parseFloat(currentTransform.replace(/translateX$$(.*)px$$/, "$1") || "0")

        // Calcular nueva posición
        const newX = currentX - increment

        // Aplicar nueva transformación
        carousel.style.transform = `translateX(${newX}px)`

        // Reiniciar cuando se haya desplazado lo suficiente
        if (Math.abs(newX) > carousel.scrollWidth / 4) {
          carousel.style.transition = "none"
          carousel.style.transform = "translateX(0px)"
          // Reactivar la transición después de un pequeño retraso
          setTimeout(() => {
            carousel.style.transition = "transform 0.5s linear"
          }, 50)
        }
      } else {
        // Para otros navegadores, usar scrollLeft como antes
        carousel.scrollLeft += increment

        // Si hemos llegado al final, volver al principio sin animación
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          carousel.style.scrollBehavior = "auto"
          carousel.scrollLeft = 0
          setTimeout(() => {
            carousel.style.scrollBehavior = "smooth"
          }, 50)
        }
      }

      animationFrameId = requestAnimationFrame(scroll)
    }

    // Iniciar la animación
    animationFrameId = requestAnimationFrame(scroll)

    // Pausar el desplazamiento cuando el usuario toca el carrusel
    const handleTouchStart = () => {
      isPaused = true
    }

    // Reanudar el desplazamiento cuando el usuario deja de tocar
    const handleTouchEnd = () => {
      // Pequeño retraso para permitir el desplazamiento manual
      setTimeout(() => {
        isPaused = false
        lastTimestamp = 0 // Reiniciar timestamp para evitar saltos
      }, 1000)
    }

    // Agregar event listeners para eventos táctiles
    carousel.addEventListener("touchstart", handleTouchStart)
    carousel.addEventListener("touchend", handleTouchEnd)

    return () => {
      cancelAnimationFrame(animationFrameId)
      carousel.removeEventListener("touchstart", handleTouchStart)
      carousel.removeEventListener("touchend", handleTouchEnd)
    }
  }, [randomizedReviews])

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

  // Si aún no tenemos reseñas aleatorizadas, mostrar un espacio reservado
  if (randomizedReviews.length === 0) {
    return null
  }

  return (
    <div className="py-10 bg-[#050505]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-cream">{t("store.reviews.title")}</h2>
        <p className="text-cream/80 text-center max-w-2xl mx-auto mb-10">{t("store.reviews.subtitle")}</p>

        <div className="relative overflow-hidden">
          <div
            ref={carouselRef}
            className="flex overflow-x-auto scrollbar-hide gap-6 pb-4"
            style={{
              scrollBehavior: "smooth",
              WebkitOverflowScrolling: "touch", // Mejora el desplazamiento en iOS
              transition: "transform 0.5s linear", // Para la animación basada en transform
            }}
          >
            {/* Duplicamos las reseñas aleatorizadas para crear el efecto infinito */}
            {[...randomizedReviews, ...randomizedReviews].map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="flex-none w-80 bg-[#0A0A0A] rounded-lg p-6 border border-orange-500/30"
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
        </div>
      </div>
    </div>
  )
}


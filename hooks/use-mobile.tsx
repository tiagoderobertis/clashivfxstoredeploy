"use client"

import { useState, useEffect } from "react"

export function useMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Función para verificar si es un dispositivo móvil
    const checkIfMobile = () => {
      if (typeof window === "undefined") return false

      const userAgent = navigator.userAgent
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i

      // También verificamos el ancho de la pantalla
      const isMobileBySize = window.innerWidth <= 768

      return mobileRegex.test(userAgent) || isMobileBySize
    }

    // Establecer el estado inicial
    setIsMobile(checkIfMobile())

    // Actualizar en cambios de tamaño de ventana
    const handleResize = () => {
      setIsMobile(checkIfMobile())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return isMobile
}


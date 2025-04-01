"use client"

import { useEffect, useState } from "react"
import { ClientProvider } from "@/components/client-provider"
import { ClientHome } from "@/components/home/client-home"

export default function ClientPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <ClientProvider>
      <ClientHome />
    </ClientProvider>
  )
}


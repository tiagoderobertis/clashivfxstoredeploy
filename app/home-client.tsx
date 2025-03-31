"use client"

// Update the import to include ClientWrapper
import { ClientWrapper } from "@/components/client-wrapper"
import { ClientHome } from "@/components/home/client-home"

export default function HomeClient() {
  // Wrap ClientHome with ClientWrapper to provide language context
  return (
    <ClientWrapper>
      <ClientHome />
    </ClientWrapper>
  )
}


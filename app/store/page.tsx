import type { Metadata } from "next"
import StoreClient from "./store-client"

export const metadata: Metadata = {
  title: "Store | Browse Video Effects",
  description: "Browse our collection of professional video effects, presets, and plugins for After Effects.",
}

export default function StorePage() {
  return <StoreClient />
}


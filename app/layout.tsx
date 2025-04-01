import type React from "react"
import type { Metadata } from "next"
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "video effects",
    "after effects",
    "presets",
    "plugins",
    "video editing",
    "motion graphics",
    "visual effects",
  ],
  authors: [
    {
      name: SITE_NAME,
    },
  ],
  creator: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.clashivfx.store",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    creator: "@clashivfx",
  },
  icons: {
    icon: "/favicon.ico",
  },
  // Añadir base URL para GitHub Pages
  metadataBase: new URL("https://www.clashivfx.store"),
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Añadir meta tag para evitar problemas de enrutamiento */}
        <meta name="fragment" content="!" />
      </head>
      <body>{children}</body>
    </html>
  )
}



import './globals.css'
import type { Metadata } from "next"
import ContactClient from "./contact-client"

export const metadata: Metadata = {
  title: "Contact | Work With Me",
  description: "Get in touch to collaborate on video effects projects or custom After Effects presets.",
}

export default function ContactPage() {
  return <ContactClient />
}


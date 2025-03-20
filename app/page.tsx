import type { Metadata } from "next"
import HomeClient from "./home-client"

export const metadata: Metadata = {
  title: "Home | Professional Video Effects",
  description: "Professional effects presets and plugins for After Effects. Optimize your video editing workflow.",
}

export default function Home() {
  return <HomeClient />
}


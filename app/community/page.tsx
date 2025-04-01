import type { Metadata } from "next"
import CommunityClient from "./community-client"

export const metadata: Metadata = {
  title: "Community | Join Our Editors Network",
  description: "Join our community of video editors to share work, get feedback, and collaborate on projects.",
}

export default function CommunityPage() {
  return <CommunityClient />
}


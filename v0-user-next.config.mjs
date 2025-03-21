/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Ignorar errores de ESLint durante la construcción
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignorar errores de TypeScript durante la construcción
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['placeholder.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true, // Necesario para exportación estática
  },
  // Asegurarnos de que se genere una exportación estática
  // Para Next.js 13.5.4, podemos usar output: 'export' o el comando next export
  output: 'export',
  trailingSlash: true, // Añade una barra diagonal al final de las URLs para compatibilidad con GitHub Pages
}

export default nextConfig


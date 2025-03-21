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
  output: 'export', // Genera archivos estáticos en lugar de una aplicación Node.js
  // Eliminar basePath si no es necesario
  // basePath: '/repo-name',
  trailingSlash: true, // Añade una barra diagonal al final de las URLs para compatibilidad con GitHub Pages
  // Añadir esta configuración para asegurar que se genere correctamente el archivo 404.html
  experimental: {
    appDir: true,
  },
}

export default nextConfig


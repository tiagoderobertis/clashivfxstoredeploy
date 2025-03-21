/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración optimizada para GitHub Pages
  output: 'export',
  // Desactivar la optimización de imágenes para exportación estática
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Añadir trailing slash para mejor compatibilidad con GitHub Pages
  trailingSlash: true,
  // Ignorar errores que puedan interrumpir la compilación
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Asegurarse de que las rutas sean compatibles con GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
  // Desactivar características que no son compatibles con exportación estática
  experimental: {
    // Desactivar características experimentales que puedan causar problemas
    serverActions: false,
  },
}

export default nextConfig


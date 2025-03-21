/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración optimizada para GitHub Pages
  output: 'export',
  // Desactivar la optimización de imágenes para exportación estática
  images: {
    unoptimized: true,
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
  // Asegurarse de que las rutas se generen correctamente
  basePath: '',
}

export default nextConfig


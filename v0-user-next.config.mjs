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
  // Configura la ruta base si tu sitio no está en la raíz del dominio
  // Por ejemplo, si tu sitio está en username.github.io/repo-name
  // basePath: '/repo-name',
  // Si estás usando un dominio personalizado, puedes comentar la línea anterior
  trailingSlash: true, // Añade una barra diagonal al final de las URLs para compatibilidad con GitHub Pages
}

export default nextConfig


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['placeholder.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Mengaktifkan optimasi untuk produksi
  swcMinify: true,
  // Mengaktifkan kompresi
  compress: true,
  // Mengaktifkan optimasi font
  optimizeFonts: true,
  // Mengaktifkan optimasi gambar
  reactStrictMode: true,
  // Konfigurasi untuk Vercel
  experimental: {
    // Remove the optimizeCss option that requires critters
    scrollRestoration: true,
  },
};

export default nextConfig;

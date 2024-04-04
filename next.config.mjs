/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['caco-dev.mimusoft.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    remotePatterns: [
      {
        hostname: 'caco-dev.mimusoft.com',
      }
    ]
  },

};

export default nextConfig;

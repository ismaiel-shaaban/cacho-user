const nextConfig = {
  compiler:{
    removeConsole: process.env.NODE_ENV === 'production'? {exclude:["error"]} : false,
  },
  distDir: 'build',
  async headers() {
    return [
      {
        source: "/api/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  },
  images: {
    domains: ['cachooapp.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    remotePatterns: [
      {
        hostname: 'cachooapp.com',
      }
    ]
  },

};

export default nextConfig;

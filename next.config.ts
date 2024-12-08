/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: async () => {

      return [
          {
              source: '/(.*)',
              headers: [
                      {
                          key: 'X-Frame-Options',
                          value: 'DENY'
                      }
                  ]
          }
      ]
  },
  // reactStrictMode: true,
  output: 'export',
  distDir: '_static',
  images: {
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
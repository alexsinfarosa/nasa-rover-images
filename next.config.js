/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'mars.jpl.nasa.gov',
        port: '',
        pathname: '/msl-raw-images/**',
      },
    ],
  },
}

module.exports = nextConfig

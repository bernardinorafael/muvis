/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],

  images: {
    domains: ['image.tmdb.org'],
  },
}

module.exports = nextConfig

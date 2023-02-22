/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // this feature is not ready yet
    appDir: false,
  },
  images: {
    // required by static generation
    unoptimized: true
  }
}

module.exports = nextConfig

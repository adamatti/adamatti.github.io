/** @type {import('next').NextConfig} */

const nextConfig = {
  assetPrefix: process.env.BASE_PATH,
  basePath: process.env.BASE_PATH,

  experimental: {
    basePath: process.env.BASE_PATH,
    // this feature is not ready yet
    appDir: false,
  },
  images: {
    // required by static generation
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }

    return config;
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.BASE_PATH,
  basePath: process.env.BASE_PATH,

  experimental: {
    // basePath: process.env.BASE_PATH,
    // this feature is not ready yet
  },
  images: {
    // required by static generation
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    // support both ~ and @ aliases to mirror tsconfig
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': require('path').resolve(__dirname, 'src'),
    };

    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }

    return config;
  },
  env: {
    nodeEnv: process.env.NODE_ENV ?? 'production',
  },
  transpilePackages: ['react-hotjar'],
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;

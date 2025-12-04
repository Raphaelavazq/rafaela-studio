/** @type {import('next').NextConfig} */
const nextConfig = {
  // Faster builds and hot reload
  reactStrictMode: false,
  
  // Optimize images
  images: {
    unoptimized: false,
    remotePatterns: [],
  },
  
  // Faster compilation
  swcMinify: true,
  
  // Disable type checking during build (faster)
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // Disable ESLint during build (faster)
  eslint: {
    ignoreDuringBuilds: false,
  },

  // Turbopack for faster dev (experimental but stable)
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};

export default nextConfig;

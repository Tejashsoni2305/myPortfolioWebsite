/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Ensures React runs in strict mode during development
    experimental: {
      appDir: true, // Enable this if you are using the `app` directory structure
    },
    images: {
      domains: ['your-image-domain.com'], // Replace with domains you use for images
    },
    eslint: {
      ignoreDuringBuilds: true, // Prevent build failures due to ESLint errors
    },
  };
  
  export default nextConfig;
  
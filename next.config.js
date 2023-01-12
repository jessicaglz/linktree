/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['www.decouper.mx'],
  },
};

module.exports = nextConfig;
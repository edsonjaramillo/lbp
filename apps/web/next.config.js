/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['ui', 'validation'],
  images: {
    remotePatterns: [{ hostname: 'picsum.photos' }],
  },
};
module.exports = nextConfig;

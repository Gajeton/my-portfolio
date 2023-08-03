/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    trailingSlash: true,
    output: 'export',
    images: {
        unoptimized: true
    },
    assetPrefix: './',
  }
   
  module.exports = nextConfig
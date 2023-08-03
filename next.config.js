/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    trailingSlash: true,
    output: 'export',
    images: {
        unoptimized: true
    },
    basePath: '/my-portofolio'
  }
   
  module.exports = nextConfig
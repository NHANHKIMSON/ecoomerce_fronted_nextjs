/** @type {import('next').NextConfig} */
const nextConfig = {
    api: {
      bodyParser: {
        sizeLimit: '5mb',
      },
    },
  };
  
  module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: false,
    images: {
      domains: ["localhost", "127.0.0.1"],
    },
};
  
module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.pexels.com",
      "upload.wikimedia.org",
      "static.xx.fbcdn.net",
      "platform-lookaside.fbsbx.com",
      "grantme.ca",
    ],
  },
};

module.exports = nextConfig;

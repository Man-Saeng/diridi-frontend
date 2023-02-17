/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        basePath: false,
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;

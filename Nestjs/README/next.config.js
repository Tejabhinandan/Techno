/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack: (config, { isServer }) => {
    const configCopy = { ...config };
    if (!isServer) configCopy.resolve.fallback.fs = false;
    return configCopy;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  env: {
    DOMAIN: process.env.DOMAIN,
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/user/searchuser",
        permanent: true,
      },
    ];
  },
};
module.exports = nextConfig;

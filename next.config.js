/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "staging-sc.arcapps.org",
        port: "",
        pathname: "/assets/img/**",
      },
    ],
  },
};

module.exports = nextConfig;

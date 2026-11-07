import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    ENABLE_ARTICLES_SECTION: process.env.ENABLE_ARTICLES_SECTION ?? "false",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;

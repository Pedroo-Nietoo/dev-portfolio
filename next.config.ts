import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_ENABLE_ARTICLES:
      process.env.NEXT_PUBLIC_ENABLE_ARTICLES ??
      process.env.ENABLE_ARTICLES ??
      "false",
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

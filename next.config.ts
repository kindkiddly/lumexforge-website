import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 60,
  },
};

export default nextConfig;

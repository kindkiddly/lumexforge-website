import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 60,
  },
  async redirects() {
    return [
      {
        source: "/proteinsnaps-privacy",
        destination: "/proteinsnap-privacy",
        permanent: true,
      },
      {
        source: "/proteinsnaps-terms",
        destination: "/proteinsnap-terms",
        permanent: true,
      },
      {
        source: "/proteinsnaps-deletion",
        destination: "/proteinsnap-deletion",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

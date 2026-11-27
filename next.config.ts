import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      // Old free diagnostics URLs, kept so shared links still work
      { source: "/free-diagnostics", destination: "/business-checkup", permanent: true },
      { source: "/FreeDiagnostics", destination: "/business-checkup-form", permanent: true },
    ];
  },
};

export default nextConfig;

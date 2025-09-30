import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // If you later deploy on Vercel, this makes sure ESLint/Tailwind work smoothly
  reactStrictMode: true,

  async redirects() {
    return [
      // If someone tries to visit the long form URLs, redirect them back to your short routes
      { source: "/subjects/leaving-certificate", destination: "/subjects/LC", permanent: true },
      { source: "/subjects/junior-cycle", destination: "/subjects/JC", permanent: true },
      { source: "/subjects/primary-school", destination: "/subjects/Primary", permanent: true },
    ];
  },
};

export default nextConfig;

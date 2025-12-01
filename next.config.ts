import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  async headers() {
    return [
      {
        source: "/api/payment/notification/:path*",
        headers: [
          { key: "Access-controll_Allow-Origin", value: "*" },
          {
            key: "Access-Controll-Allow-Methods",
            value: "GET, POST",
          },
          {
            key: "Access-Controll-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accpet-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version ",
          },
        ],
      },
    ];
  },

  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "m2tvdofy1mook3wo.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;

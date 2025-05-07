import type { NextConfig } from "next";

const config:NextConfig = {
  output: 'standalone',
  outputFileTracingExcludes: {
    '*': ['node_modules/**/*']
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "daggle.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default config;
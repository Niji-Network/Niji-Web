import type { NextConfig } from "next";
import withMDX from '@next/mdx';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/G2uh75G4w7",
        permanent: false,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.nijii.xyz',
      },
    ],
  }
};

export default withMDX({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react'
  },
})(nextConfig);

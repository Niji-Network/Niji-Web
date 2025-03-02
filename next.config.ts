import type { NextConfig } from "next";
import withMDX from '@next/mdx';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
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

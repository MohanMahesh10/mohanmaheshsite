import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NEXT_BASE_PATH ?? "",
  assetPrefix: process.env.NEXT_ASSET_PREFIX ?? undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

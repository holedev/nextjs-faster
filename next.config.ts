import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./configs/i18n/request.ts");

const nextConfig: NextConfig = {
  cacheComponents: true,
  reactCompiler: true,
  output: "standalone",
  outputFileTracingExcludes: {
    "*": [".next/export-detail.json"],
    "/api/docs": ["./.next/cache/**/*"]
  },
  webpack: (
    config,
    {
      buildId: _buildId,
      dev,
      isServer: _isServer,
      defaultLoaders: _defaultLoaders,
      nextRuntime: _nextRuntime,
      webpack: _webpack
    }
  ) => {
    if (config.cache && !dev) {
      config.cache = Object.freeze({ type: "memory" });
    }
    // Important: return the modified config
    return config;
  }
};

export default withNextIntl(nextConfig);

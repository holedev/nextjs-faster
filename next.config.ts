import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin("./configs/i18n/request.ts");

const nextConfig: NextConfig = {
  // Use standalone output for optimized production builds
  output: "standalone",

  // Experimental features for better performance and smaller bundle size
  experimental: {
    // Enable server code minification
    serverMinification: true,
    // Optimize server components
    optimizeServerReact: true,
    // Optimize package imports
    optimizePackageImports: [
      "@radix-ui/react-icons",
      "@radix-ui/react-dialog",
      "@radix-ui/react-dropdown-menu",
      "lucide-react"
    ]
  },

  // Configure module transpilation
  transpilePackages: ["@radix-ui/react-icons"]
};

export default withNextIntl(nextConfig);

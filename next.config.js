/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use `/form` as the base path for the application.
  basePath: "/proposal",

  // Enable source maps for better debugging in production.
  productionBrowserSourceMaps: true,

  // Allow TypeScript to ignore build errors during the build process.
  typescript: {
    ignoreBuildErrors: true,
  },

  // Add React strict mode for highlighting potential problems in the application.
  reactStrictMode: true,

  // Custom Webpack configuration if needed.
  webpack: (config) => {
    // Example: Add any custom webpack plugins or settings here.
    return config;
  },
};

module.exports = nextConfig;

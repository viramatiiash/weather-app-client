import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  base: "/weather-app/",
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
        titleProp: true,
      },
      include: "**/*.svg",
    }),
  ],
  resolve: {
    alias: {
      "@assets": "/src/assets",
      "@images": "/src/assets/images",
      "@": "/src/",
      "@styles": "/src/styles",
      "@icons": "/src/assets/icons",
      "@components": "/src/components",
      "@utils": "/src/utils",
    },
  },
});

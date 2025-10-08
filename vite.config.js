import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  base: "/weather-app-client/",
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
      "@UI": "/src/components/UI",
      "@services": "/src/services",
      "@interfaces": "/src/interfaces",
      "@assets": "/src/assets",
      "@": "/src/",
      "@styles": "/src/styles",
      "@icons": "/src/assets/icons",
      "@components": "/src/components",
      "@utils": "/src/utils",
    },
  },
});

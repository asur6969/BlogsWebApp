import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    visualizer({
      filename: "dist/stats.html", // where to save the report
      open: true, // open the report in browser automatically
      gzipSize: true, // show gzip sizes
      brotliSize: true, // show brotli sizes
    }) as PluginOption,
  ],
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  // if your app will be served from the root of the domain:
  base: "/",
  resolve: {
    alias: {
      // “@” → src
      "@": path.resolve(__dirname, "./src"),
      // “@images” → src/images
      "@images": path.resolve(__dirname, "./src/images"),
    },
  },
  plugins: [react()],
});

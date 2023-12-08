import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr(), tsconfigPaths(), dts({ outDir: "dist" })],
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      name: "vite-shared",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"], // Add other external dependencies
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});

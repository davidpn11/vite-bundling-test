// vite.config.js
import { defineConfig } from "file:///Users/david.nascimento/Documents/SKIP/vite-bundling-test/node_modules/vite/dist/node/index.js";
import react from "file:///Users/david.nascimento/Documents/SKIP/vite-bundling-test/node_modules/@vitejs/plugin-react/dist/index.js";
import tsconfigPaths from "file:///Users/david.nascimento/Documents/SKIP/vite-bundling-test/node_modules/vite-tsconfig-paths/dist/index.mjs";
import dts from "file:///Users/david.nascimento/Documents/SKIP/vite-bundling-test/node_modules/vite-plugin-dts/dist/index.mjs";
import svgr from "file:///Users/david.nascimento/Documents/SKIP/vite-bundling-test/node_modules/vite-plugin-svgr/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [react(), svgr(), tsconfigPaths(), dts({ outDir: "dist" })],
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      name: "vite-shared"
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      // Add other external dependencies
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZGF2aWQubmFzY2ltZW50by9Eb2N1bWVudHMvU0tJUC92aXRlLWJ1bmRsaW5nLXRlc3QvcGFja2FnZXMvc2hhcmVkLXZpdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9kYXZpZC5uYXNjaW1lbnRvL0RvY3VtZW50cy9TS0lQL3ZpdGUtYnVuZGxpbmctdGVzdC9wYWNrYWdlcy9zaGFyZWQtdml0ZS92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvZGF2aWQubmFzY2ltZW50by9Eb2N1bWVudHMvU0tJUC92aXRlLWJ1bmRsaW5nLXRlc3QvcGFja2FnZXMvc2hhcmVkLXZpdGUvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSBcInZpdGUtdHNjb25maWctcGF0aHNcIjtcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xuaW1wb3J0IHN2Z3IgZnJvbSBcInZpdGUtcGx1Z2luLXN2Z3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCksIHN2Z3IoKSwgdHNjb25maWdQYXRocygpLCBkdHMoeyBvdXREaXI6IFwiZGlzdFwiIH0pXSxcbiAgYnVpbGQ6IHtcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiBcInNyYy9pbmRleC50c1wiLFxuICAgICAgZm9ybWF0czogW1wiZXNcIl0sXG4gICAgICBuYW1lOiBcInZpdGUtc2hhcmVkXCIsXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogW1wicmVhY3RcIiwgXCJyZWFjdC1kb21cIiwgXCJyZWFjdC9qc3gtcnVudGltZVwiXSwgLy8gQWRkIG90aGVyIGV4dGVybmFsIGRlcGVuZGVuY2llc1xuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICByZWFjdDogXCJSZWFjdFwiLFxuICAgICAgICAgIFwicmVhY3QtZG9tXCI6IFwiUmVhY3RET01cIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE0WixTQUFTLG9CQUFvQjtBQUN6YixPQUFPLFdBQVc7QUFDbEIsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sVUFBVTtBQUVqQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxjQUFjLEdBQUcsSUFBSSxFQUFFLFFBQVEsT0FBTyxDQUFDLENBQUM7QUFBQSxFQUNuRSxPQUFPO0FBQUEsSUFDTCxLQUFLO0FBQUEsTUFDSCxPQUFPO0FBQUEsTUFDUCxTQUFTLENBQUMsSUFBSTtBQUFBLE1BQ2QsTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxTQUFTLGFBQWEsbUJBQW1CO0FBQUE7QUFBQSxNQUNwRCxRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsVUFDUCxPQUFPO0FBQUEsVUFDUCxhQUFhO0FBQUEsUUFDZjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==

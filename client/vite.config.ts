import path from "path";
import solid from "vite-plugin-solid";
import { defineConfig } from "vite";
import removeConsole from "vite-plugin-remove-console";

export default defineConfig({
  plugins: [
    solid(),
    removeConsole(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target:"es2020",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});

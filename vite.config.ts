import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // eslint-disable-next-line unicorn/prefer-module
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});

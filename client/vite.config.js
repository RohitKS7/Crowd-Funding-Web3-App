import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "ethers/lib/utils": "ethers/utils", // From previous fix
      "@safe-globalThis": "@safe-global",
      "@safe-global": "/node_modules/@safe-global",
    },
  },
  build: {
    target: "esnext", // Use the latest ECMAScript features (includes BigInt)
    rollupOptions: {
      external: ["ethers", "ethers/utils"],
      onwarn(warning, warn) {
        if (warning.message.includes("use client")) return; // Suppress 'use client' warnings
        warn(warning);
      },
    },
  },
});

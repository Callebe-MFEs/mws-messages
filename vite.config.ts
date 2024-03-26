import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "esnext",
  },
  plugins: [
    react(),
    federation({
      name: "mwsMessages",
      filename: "remoteEntry.js",
      exposes: {
        "./mwsMessages": "./src/mfe.ts",
      },
      shared: ["react", "react-dom"],
    }),
  ],
});

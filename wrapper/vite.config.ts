import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {TanStackRouterVite} from "@tanstack/router-vite-plugin";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite(),
    federation({
      name: "wrapper",
      remotes: {
        list: "https://list-delta-six.vercel.app/assets/listRemoteEntry.js",
        editor: "https://editor-two-orpin.vercel.app/assets/editorRemoteEntry.js",
        auth: "https://auth-kohl-seven-24.vercel.app/assets/authRemoteEntry.js",
      },
      shared: ["react", "react-dom"],
    })],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})

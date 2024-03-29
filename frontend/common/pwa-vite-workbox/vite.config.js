import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      VitePWA({
        registerType: "autoUpdate",
        injectRegister: 'auto',
          strategies: 'injectManifest',
          srcDir: 'src',
          filename: 'my-sw.js',
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        },
          devOptions: {
              enabled: true
              /* other options */
          },
        includeAssets: [
          "**/*",
        ]
      })
  ],
})

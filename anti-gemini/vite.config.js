import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'manifest.json',
          dest: '.'
        }
      ]
    })
  ],
  build: {
    rollupOptions: {
      input: {
        popup: "index.html",
        content: "src/content.jsx",
      },
      output: {
        entryFileNames: "content.js",
      }
    },
    outDir: "build",
    emptyOutDir: true,
  }
})

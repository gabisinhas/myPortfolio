import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: './', // Ensure the root is set to the correct directory
  plugins: [react()],
  base: "/myPortfolio/",
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // or "modern", "legacy"
      }
    }
  }
})

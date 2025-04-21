import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: './', // Ensure the root is set to the correct directory
  plugins: [react()],
  base: "/myPortfolio/",
  resolve: {
    extensions: ['.js', '.jsx'], // Add support for .jsx files
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // or "modern", "legacy"
      }
    }
  }
})

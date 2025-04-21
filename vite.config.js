import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: './', // Ensure the root is set to the correct directory
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx'], // Add support for .jsx files
  },
  esbuild: {
    loader: 'jsx', // Ensure JSX files are properly handled
    include: /src\/.*\.jsx?$/, // Include JSX files in the src directory
  },
  server: {
    mimeTypes: {
      'text/jsx': 'application/javascript', // Map text/jsx to application/javascript
    },
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

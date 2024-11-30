import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensures the frontend build output is consistent
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Backend during local development
        changeOrigin: true,
      },
    },
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/FBDfrontend-vite-deploy/',
  plugins: [react()],
  define: {
    global: {},
  },
  build: {
    assetsInclude: ['**/*.MP4', '**/*.mp4']
  }
});

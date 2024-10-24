import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      api: '/src/api',
      assets: '/src/assets',
      components: '/src/components',
      constants: '/src/constants',
      helpers: '/src/helpers',
      store: '/src/store',
      styles: '/src/styles',
    },
  },
 /* server: {
    //enable to test on mobile devices
    host: '0.0.0.0',
    port: 5173,
  }*/
});

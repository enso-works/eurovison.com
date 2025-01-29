import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';
import Sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
      include: ['**/*.tsx', '**/*.ts'],
    }),
    viteCompression(),
    Sitemap({
      hostname: 'https://eurovison.com',
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['react-helmet-async'],
  },
  ssr: {
    noExternal: ['react-helmet-async'],
  },
});

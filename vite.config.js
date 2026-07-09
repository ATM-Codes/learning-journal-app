import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about_me.html'),
        featured: resolve(__dirname, 'featured_article.html'),
      },
    },
  },
});
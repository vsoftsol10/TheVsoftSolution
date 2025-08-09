import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import viteCompression from 'vite-plugin-compression';
import { createHtmlPlugin } from 'vite-plugin-html';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'VSoft',
          injectScript: `<script src="/src/main.jsx" type="module"></script>`,
        },
      },
    }), viteCompression({
      algorithm: 'gzip', // or 'brotliCompress'
      ext: '.gz',
      threshold: 1024, // Only compress files > 1kb
      deleteOriginFile: false // Set true to delete original uncompressed files
    }),],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
  },
  
})

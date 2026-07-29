import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@data': resolve(__dirname, 'src/data'),
      '@css': resolve(__dirname, 'src/css'),
      '@js': resolve(__dirname, 'src/js'),
    },
  },
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    // Multi-page app: cada carpeta con su index.html es una entrada de build.
    // Al sumar una página nueva (distritos, capitolio, juegos), agregarla acá.
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        tributos: resolve(__dirname, 'tributos/index.html'),
        distritos: resolve(__dirname, 'distritos/index.html'),
        capitolio: resolve(__dirname, 'capitolio/index.html'),
        juegos: resolve(__dirname, 'juegos/index.html'),
      },
    },
  },
});

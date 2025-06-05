// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
//
// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@assets': '/src/assets',
      '@components': '/src/components',
    },
  },
  server: {
    port: 3000,
  },
  // Добавляем эти настройки для production
  build: {
    outDir: 'dist', // Явно указываем выходную директорию
    sourcemap: false, // Отключаем sourcemaps для production
    rollupOptions: {
      output: {
        // Группируем vendor-файлы
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        // Форматирование имен файлов
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  },
  // Критически важная настройка для деплоя
  base: './', // Используем относительные пути
});
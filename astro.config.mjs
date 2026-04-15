// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://arhangelpushkino.ru',
  // Разрешаем Astro работать на нашем домене
  server: {
    allowedHosts: true
  },
  build: {
    // Эта команда — наше крайнее средство. Она заставляет Astro ВСЕГДА встраивать CSS внутрь HTML.
    inlineStylesheets: 'always', 
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: false, // Соберем все стили в один кусок для надежности
      assetsInlineLimit: 10240, // Вшиваем мелкие картинки и шрифты прямо в код
    }
  }
});
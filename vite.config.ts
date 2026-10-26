import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rolldownOptions: {
      // Çok sayfalı build: ana sayfa + /gizlilik-politikasi/ (App Store kaydı bu URL'ye bağlı) + /kvkk/
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        privacy: fileURLToPath(new URL('./gizlilik-politikasi/index.html', import.meta.url)),
        kvkk: fileURLToPath(new URL('./kvkk/index.html', import.meta.url)),
      },
    },
  },
})

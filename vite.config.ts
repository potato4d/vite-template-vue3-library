import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      fileName: 'index',
      formats: [
        'cjs',
        'es'
      ]
    },
    rollupOptions: {
      external: [
        'vue'
      ],
      output: {
        globals: {
          vue: 'vue'
        }
      }
    }
  },
  plugins: [vue()]
})

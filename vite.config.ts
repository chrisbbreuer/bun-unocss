import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  server: {
    // host: app.url || 'stacks.test',
    // host: 'stacks.test',
    open: true,
  },

  plugins: [
    Vue(),
    UnoCSS(),
  ],
})

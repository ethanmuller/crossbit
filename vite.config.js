import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [svelte()],
  test: {
    environment: 'jsdom',
    globals: true,
  },
})

// @ts-check
import { defineConfig } from 'astro/config'
import { murypAstroMinify } from '@muryp/vite-html'

// https://astro.build/config
export default defineConfig({
  vite: {
    build: {
      rollupOptions: {
        external: [/^myscripts.*/],
      },
    },
  },
  integrations: [
    murypAstroMinify({
      minify: {
        css: false,
        html: false,
      },
    }),
  ],
})
// @ts-check
import { defineConfig } from 'astro/config'
import { murypAstroMinify } from '@muryp/vite-html'
import tailwind from '@astrojs/tailwind'

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
    tailwind({
      nesting: true,
    }),
    murypAstroMinify({
      minify: {
        css: false,
        html: false,
      },
    }),
  ],
})

import { defineConfig } from 'astro/config'
import { murypAstroMinify, ViteMurypJsLiteral } from '@muryp/vite-html'

// https://astro.build/config
export default defineConfig({
  vite: {
    build: {
      rollupOptions: {
        external: [/^myscripts.*/],
      },
    },
    plugins: [
      ViteMurypJsLiteral({
        minify: {
          html: false,
          css: false,
        },
      }),
    ],
  },
})
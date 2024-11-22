import { defineConfig } from 'vite'
import { ViteMurypJsLiteral } from '@muryp/vite-html'

export default defineConfig({
  root: 'src/assets/js/', // Atur root direktori menjadi 'src'
  plugins: [
    ViteMurypJsLiteral({
      minify: {
        html: true,
      },
    }),
  ],
  build: {
    outDir: './out', // Atur output directory menjadi '../out' (satu tingkat di atas)
    rollupOptions: {
      input: {
        main: 'src/assets/script/main.js',
      },
    },
  },
})

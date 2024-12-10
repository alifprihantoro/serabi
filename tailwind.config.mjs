import daisyui from 'daisyui'
import typograph from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/view/**/*.{astro,ts}'],
  theme: {
    extend: {
      fontFamily: {
        Lato: ['Lato', 'sans-serif'],
        Rokkit: ['Rokkitt', 'serif'],
        GreatFibes: ['Great Vibes', 'serif'],
      },
      boxShadow: {
        center: '0 0 15px 3px blur',
      },
    },
  },
  daisyui: {
    base: false,
    themes: [
      {
        light: {
          'primary': '#038811',
          'secondary': '#784b2c',
          '.btn-primary': {
            color: '#fff',
          },
        },
      },
    ],
  },
  plugins: [typograph, daisyui],
}
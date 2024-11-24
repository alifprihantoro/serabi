const themes = require('daisyui/src/theming/themes')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,ts}'],
  theme: {
    extend: {
      fontFamily: {
        Lato: ['Lato', 'sans-serif'],
        Rokkit: ['Rokkitt', 'serif'],
      },
      boxShadow: {
        center: '0 0 15px 3px blur',
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...themes['cupcake'],
          primary: '#53904e',
          secondary: '#784b2c',
        },
      },
    ],
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}

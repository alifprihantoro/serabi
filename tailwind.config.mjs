const themes = require('daisyui/src/theming/themes');

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
        dark: {
          ...themes['dark'],
          primary: '#b388eb',
          secondary: '#8093f1',
          // 'accent': '#5eead4',
          // 'neutral': '#dededf',
          // 'base-100': '#282A36',
          // 'info': '#374151',
          success: '#08605f',
          warning: '#F1FA8C',
          error: '#f4e04d',
        },
        light: {
          ...themes['corporate'],
          primary: '#b388eb',
          secondary: '#8093f1',
          // 'accent': '#5eead4',
          // 'neutral': '#dededf',
          // 'base-100': '#282A36',
          // 'info': '#374151',
          success: '#08605f',
          warning: '#F1FA8C',
          error: '#f4e04d',
        },
      },
    ],
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};

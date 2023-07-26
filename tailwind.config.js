/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'header-dark': '#050F11',
        'primary-dark': '#02131B',
        'primary-light': '#39989B',
        'primary-red':'#D02D2D',
        'accent-yellow': '#F0DE36'
      }
    },
  },
  plugins: [],
}


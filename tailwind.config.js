/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'custom-hover': '#ffa500',
        'custom-background': '#333',
        'principal-color': '#ff8000'
      }
    },
  },
  plugins: [],
}


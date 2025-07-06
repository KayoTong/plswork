/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lobster': ['Lobster', 'cursive'],
      },
      colors: {
        'restaurant-dark': '#111',
        'restaurant-orange': '#f39c12',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 
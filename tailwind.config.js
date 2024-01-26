/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'game': "url('/public/background.jpg')"
      },
      colors: {
        'primary': '#141414',
        'secundary': '#b700ff',
        'third': '#727272',
        'fourth': '#3D3D3D'
      },
      fontFamily: {
        'helvetica': ['Helvetica Neue', 'sans-serif'],
        'bebas': ['Bebas Neue', 'cursive'],
        'raleway': ['Raleway']
      }
    }
  }
}
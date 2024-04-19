/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#91CC7F',
        customOrange: '#EF7415',
        customBlack: '#0A0A05',
        customBrown: '#4F4A45',
        customHov: '#B8D699',
        customOre: '#F8EEE1'
      },
    },
  },
  plugins: [],
}


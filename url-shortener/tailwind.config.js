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
        customOrange: '#f07d25',
        customBlack: '#0A0A05',
        customBrown: '#4F4A45',
        customHov: '#F8DFCE',
        customOre: '#F8EEE1',
        cardTwo: '#F9F3F1',
        cardOne: '#F8EEE1',
        cardThree: '#E9E8EA'
      },
    },
  },
  plugins: [],
}


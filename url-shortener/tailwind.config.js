/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: '#BA1A29',
        customOrange: '#F97B08',
        customBlack: '#1D1D1C',
      },
    },
  },
  plugins: [],
}


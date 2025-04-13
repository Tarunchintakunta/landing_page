/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#415d80",
        secondary: "#373945",
        tertiary: "#3e434d",
        light: "#f4f0ec",
      },
      fontFamily: {
        'rooftop': ['Rooftop Regular', 'sans-serif'],
        'sans': ['sans-serif'],
      },
    },
  },
  plugins: [],
}
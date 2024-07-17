/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
    colors: {
      'blueLight': '#F0FFFF',
      'blueGrey': '#8D9DAD',
      'grey': '#374151',
      'grey2': '#1f2937',
    },
    extend: {},
  },
  plugins: [],
}


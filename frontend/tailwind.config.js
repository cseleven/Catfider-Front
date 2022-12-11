/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "salmon": "#FA8072",
        "light-salmon": "#FDEFED",
        "iris": "#5D5FEF",
        "bright-salmon": "#FFCFCA",
        "white-salmon": "#FFF2F0",
        "white-light":"#DEE2E6"
      },
    },
  },
  plugins: [],
}

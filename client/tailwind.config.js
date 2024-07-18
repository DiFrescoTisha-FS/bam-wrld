/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "arthemis": ["Arthemis", "sans serif"],
      },
      colors: {
        primary: '#ac94f4',
      },
    },
  },
  plugins: [],
}
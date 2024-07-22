/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "arthemis": ["Arthemis", "sans serif"],
      },
      theme: {
        extend: {},
      },
      colors: {
        primary: '#ac94f4',
      },
    },
  },
  plugins: [],
}
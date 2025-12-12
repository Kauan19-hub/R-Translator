/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{.js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#f1f3f4',
        sbackground: '#f5f5f5',
        hcolor: '#5f6368',
        txtcolor: '#3c4043',
      }
    },
  },
  plugins: [],
}
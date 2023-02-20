/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        spinout: {
          "0%, 100%": { transform: "rotate(720deg)" },
          "50%": { transform: "rotate(360deg)" }
        }
      },
      animation: {
        spinout: "wiggle 200ms ease-in-out"
      }
    },
  },
  plugins: [],
  darkMode: "class"
}
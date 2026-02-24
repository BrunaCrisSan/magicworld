/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        fluidTitle: 'clamp(1.05rem, 6.2vw, 3rem)',
        fluidButton: 'clamp(0.95rem, 2.2vw, 1.25rem)',
      },
    },
  },
  plugins: [],
}
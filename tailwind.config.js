/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Poppins"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      colors: {
        primary: "#1a1a2e",
        accent: "#e94560",
        soft: "#16213e",
      },
    },
  },
  plugins: [],
}

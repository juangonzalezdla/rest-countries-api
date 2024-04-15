/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: 'hsl(var(--white))',
        'light-gray': 'hsl(var(--light-gray))'
      }
    },
  },
  plugins: [],
}

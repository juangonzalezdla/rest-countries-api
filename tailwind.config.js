const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        white: 'hsl(var(--white))',
        'light-gray': 'hsl(var(--light-gray))',
        'dark-gray': 'hsl(var(--dark-gray))',
        'dark-blue': 'hsl(var(--dark-blue))',
        'dark-blue-background': 'hsl(var(--dark-blue-background))',
        'dark-blue-text': 'hsl(var(--dark-blue-text))',
        'dark-blue-hover': 'hsl(var(--dark-blue-hover))',
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

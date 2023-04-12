/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'green': '#1bce94',
        'gray-light': '#f1f2f6',
        'blue': '#112469',
        'gray-dark': '#8a979d'
      }
    },
  },
  plugins: [],
}


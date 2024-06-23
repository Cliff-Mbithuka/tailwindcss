/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      appearance: ['hover', 'focus'], // Customize as needed
    },
  },
  plugins: [],
}

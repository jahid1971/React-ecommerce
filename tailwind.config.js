/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
     },
  theme: {
    extend: {},
  },
  plugins: [],
}

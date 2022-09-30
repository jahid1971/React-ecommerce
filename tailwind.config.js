/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  variants: {
    // textColor: ['responsive', 'hover', 'focus', 'group-hover'],
     },
  theme: {
    // screens: {
    //   'sm': '640px',

    //   'md': '768px',
     

    //   'lg': '1024px'
    // },
    extend: {},
  },
  plugins: [require("daisyui")],
}

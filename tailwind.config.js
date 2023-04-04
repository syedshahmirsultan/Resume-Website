/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screen:{
        xs :"350px",
        sm :"640px",
        md :"780px",
        lg:"1024px",
        xl:"1280px"
      }
    }
  },
  plugins: [],
}

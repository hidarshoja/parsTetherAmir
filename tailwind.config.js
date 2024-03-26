/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'color1' : '#222',
        "color2" :"#ffb000",
        "color3" :"#f5f5dc",
        "color4" :"#ffcf9d",

      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily : {
      a:['Edu NSW ACT Foundation'],
      b:['Anton'],
      c:['DM Serif Display'],
      d:['Archivo Black']
     
    }
  },
  plugins: [require("daisyui")],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
       fontFamily: {
      display: ['Inter', 'system-ui', 'sans-serif'],
      body: ['Inter', 'system-ui', 'sans-serif'],
    },
      colors: {
      primaryColor: "#8873ef",
      headingColor: "#081e21",
      smallTextColor: "#193256"
      },
    },
  },
  plugins: [],
}


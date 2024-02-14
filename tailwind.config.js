/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      primary: '#2430A0'
    },
    fontFamily:{
      'nunito': ['Nunito Sans']
    }
  },
  plugins: [],
}
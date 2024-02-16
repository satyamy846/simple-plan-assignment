/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'mask_group': `url("./src/assets/Teachers/Mask Group.png")`
      }
    },
    listStyleType:{
      square: 'square'
    },
    colors:{
      primary: '#2430A0',
      lightgray: '#E5E5E5',
      white: '#ffff',
      black: '#000',
      orange: '#E25753',
      lightblue: '#F4F7FA',
      simpleplan_lightblue: '#51557D',
      gray: '#4D4D4D',
      lightpink: '#FF006D'
    },
    fontFamily:{
      nunito: ['Nunito Sans'],
      pp_pangram_bold: ['PP Pangram Sans Rounded Bold'],
      pp_pangram_semibold: ['PP Pangram Sans Rounded Semibold'],
      pp_pangram_medium: ['PP Pangram Sans Rounded Medium']
    }
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          primary: "#0e456d",
          secondary: "#030d14",
      },

      container: {
        padding: {
DEFAULT: "1rem",
  sm: "3rem",

  fontFamily: {
    sans: ['Poppins', 'sans-serif'], },
      },

    },

  },
  plugins: [],

  },

  backgroundImage: {
    'fundo': "url('../../assets/fundo.png')",
  },

}


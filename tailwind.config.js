/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": "'Open Sans'",
        poppins: "Poppins",
        "fedra-sans-std": "'Fedra Sans Std'",
        inherit: "inherit",
      },
    },
    screens: {
       // => @media (max-width: 767px) { ... }
      'mobile': {'max': '475px'},
      ...defaultTheme.screens,
      'tablet': {'max': '640px'},
      'laptop': {'max': '1024px'},
      'desktop':  {'max': '1366px'},
    },
    extend: {
      screens: {
        'large-screen': {'max': '1920px'},
      },
    },
    colors: {
      white: "#fff",
      gold: "#f7c600",
      gray: {
        100: "#f9f9f9",
        200: "#f5fafd",
        300: "#f4f4f4",
        400: "#c9e3f4",
        500: "#ddd",
        600: "#d9d9d9",
        700: "#b8bec7",
        800: "#bcbcbc",
        900: "#b9b9b9",
        1000: "#7b8391",
        1100: "#7c7c7c",
        1200: "#22567f",
        1300: "#3e3e3e",
        1400: "#113151",
        1500: "#02163e",
        1600: "#01163e",
        1700: "#000c24",
      },
      teal: { 100: "#439fd9", 200: "rgba(67, 159, 217, 0.1)" },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "32px",
      "4xl": "36px",
      "5xl": "40px",
      "6xl": "48px",
      "7xl": "64px",
    },
  },
  corePlugins: { preflight: false },
};

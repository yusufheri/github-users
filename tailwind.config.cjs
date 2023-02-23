const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  module: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Roboto Mono", "Coiny", "sans-serif"],
      serif: ["Roboto Mono", "Coiny", "serif"],
      body: [ "Roboto Mono","Coiny", "sans-serif"],
    },
    extend: {
      container: {
        center: true,
      }
    },
  },
  plugins: [],
})

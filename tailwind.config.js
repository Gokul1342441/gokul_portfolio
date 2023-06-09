/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require("daisyui"),
    require('autoprefixer'),
  ],

  daisyui: {
    themes: ["black"],
  },
}
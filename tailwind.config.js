/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './*.{js,jsx,html}',
      './src/*.{js,jsx,html}',
      './src/**/*.{js,jsx,html}'
  ],
  mode:'jit',
  darkMode:'class',
  theme: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Define quais arquivos terão estilização CSS usando tailwind
  content: [
    "./src/**/*.tsx",
    "./index.html"
  ],
  theme: {
    // Permite que você adicione novas classes tailwind
    extend: {
      colors: {
        "background-page": "#09090A"
      }
    },
  },
  plugins: [],
}

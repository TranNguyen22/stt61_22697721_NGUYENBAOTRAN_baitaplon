/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./sitemap.html",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  prefix: "tw-"
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        dark: "#001525",
      },
      fontFamily: {
        default: ["Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

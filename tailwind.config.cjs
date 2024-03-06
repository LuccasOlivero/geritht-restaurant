/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#706FE5",
        primary2: "#5E5BC9",
        secondary: "#EAEAFC",
        secondary2: "#DADAF5",
        footer: "#2E3E5C",
      },
    },
  },
  plugins: [],
};

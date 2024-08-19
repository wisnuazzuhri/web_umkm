/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        text: "#333333",
        blue: "#1a4089",
        orange: "#f9971c",
        army: "#766027",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

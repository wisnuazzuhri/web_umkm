
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors : {
        blue : "#1a4089",
        orange  : "#f8981d",
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};

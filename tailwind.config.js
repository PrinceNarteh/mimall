/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        background: "../assets/images/background.png",
      },
      colors: {
        "dark-gray": "#282e38",
        "light-gray": "#313844",
        "off-white": "#adb5bd",
      },
    },
  },
  plugins: [],
};

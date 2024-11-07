/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(196, 23, 27)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        Avenir: ["Avenir_Next", "sans-serif"],
        Open_sans: ["Open_Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D9BF0",
        "gray-light": "#D9DBE9",
        "gray-dark": "#BBBBBB",
        dark: "#14142B",
      },
    },
  },
  plugins: [],
};

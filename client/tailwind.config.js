/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#257F30",
      },
      screens: {
        lg: "1210px",
        xs: "430px",
      },
    },
  },
  plugins: [],
};

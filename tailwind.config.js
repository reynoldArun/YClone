/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "375px",
      sm: "430px",
      md: "705px",
      lg: "792px",
      xl: '1120px',
      xxl: '1620px'
    },
    extend: {},
  },
  plugins: [],
};

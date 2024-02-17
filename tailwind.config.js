/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "768px",
      laptop: "1024px",
      desktop: "1440px",
    },
    fontSize: {
      nav: ["20px", { lineHeight: "24px", fontWeight: "600" }],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      blue: {
        50: "#f6fafe",
        100: "#d9e9fc",
        300: "#355EC9",
        400: "#0288D1",
        500: "#2100F5",
      },
      gray: {
        200: "#E9E9E9",
      },
    },
    extend: {},
  },
  plugins: [],
};

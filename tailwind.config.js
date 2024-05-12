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
      h1: ["40px", "48px"],
      "card-title": ["36px", "42px"],
      "card-desc": ["24px", "32px"],
      "card-text": ["18px", "24px"],
      nav: ["20px", { lineHeight: "24px", fontWeight: "700" }],
      tag: ["12px", "24px"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      light: "#FAFAFF",
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
      purple: {
        50: "#E8E5F5",
        100: "#E8E6F5",
        200: "#DDD7FF",
        400: "#9379FF",
        500: "#5000D4",
        600: "#7240FF",
      },
      dark: "#090029",
    },
    transitionTimingFunction: {
      gentle: "cubic-bezier(0.47, 0, 0.23, 1.38)",
    },
    extend: {},
  },
  plugins: [],
};

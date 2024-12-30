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
      h1: ["48px", { lineHeight: "56px", fontWeight: "700" }],
      "card-title": ["32px", "42px"],
      "card-desc": ["18px", "24px"],
      "card-text": ["16px", "24px"],
      nav: ["16px", { lineHeight: "20px", fontWeight: "700" }],
      label: ["16px", "24px"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#1A1A1A",
      light: "#FAFAFF",
      red: {
        500: "#D40026",
      },
      blue: {
        500: "#2100F5",
      },
      gray: {
        100: "#F7F7F7",
        200: "#F5F5F5",
        300: "#E6E8EB",
        500: "#999999",
      },
      purple: {
        50: "#F2F0FF",
        100: "#E8E6F5",
        200: "#DDD7FF",
        400: "#9379FF",
        500: "#5000D4",
        600: "#7240FF",
        700: "#2E0081",
        800: "#6833FF",
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

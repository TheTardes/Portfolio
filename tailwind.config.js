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
      h1: ["48px", "56px"],
      h2: ["32px", "42px"],
      nav: ["16px", "20px"],
      label: ["16px", "24px"],
      xs: ["12px", "20px"],
      base: ["16px", "24px"],
      "md-alt": ["18px", "24px"],
      md: ["18px", "28px"],
      lg: ["22px", "28px"],
      xl: ["28px", "36px"],
      "2xl": ["32px", "44px"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#fcfcfc",
      black: "#1A1A1A",
      light: "#FAFAFF",
      red: "#D40026",
      green: "#157B00",
      blue: "#0041E7",
      gray: {
        100: "#F7F7F7",
        200: "#F5F5F5",
        250: "#F3F3F4",
        300: "#E6E8EB",
        400: "#E2E2E5",
        500: "#999999",
        600: "#7f7f7f",
        700: "#ADADB2",
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

      primary: {
        500: "#6833FF",
      },
    },
    transitionTimingFunction: {
      gentle: "cubic-bezier(0.47, 0, 0.23, 1.38)",
    },
    extend: {},
  },
  plugins: [],
};

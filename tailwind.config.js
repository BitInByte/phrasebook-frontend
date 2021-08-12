module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      pink: "#f865b0",
      lightPink: "#f985c1",
      blue: "#bce7fd",
      yellow: "#f4d35e",
      darkYellow: "#cda30e",
      red: "#890620",
      bgRed: "#f74266",
      green: "#4b543b",
      bgGreen: "#91a077",
      grey: "#342e37",
      black: "#071108",
      white: "#f0f0f0f0",
    },
    extend: {
      fontSize: {
        // small: "1.4rem",
        small: "0.875rem",
        normal: "1rem",
        medium: "1.125rem",
        big: "1.5625rem",
        "extra-big": "2.1875rem",
      },
      fontFamily: {
        freadoka: ["Fredoka One", "cursive"],
        jura: ["Jura", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

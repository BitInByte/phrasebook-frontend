const colors = {
  transparent: "transparent",
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
  greyLight: "grey",
  black: "#071108",
  white: "#f0f0f0f0",
  whiteLight: "#aaaaaa",
  drawer: "rgba(0, 0, 0, 0.75)",
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: colors,
    extend: {
      fontSize: {
        // small: "1.4rem",
        small: "0.875rem", // 14
        normal: "1rem", // 16
        medium: "1.125rem", // 18
        big: "1.5625rem", // 25
        "extra-big": "2.1875rem", // 35
        input: "0.8444125rem",
        beginPhrase: "10rem",
      },
      fontFamily: {
        // fredoka: ["Fredoka One", "cursive"],
        fredoka: ["Fredoka One", "sans-serif"],
        jura: ["Jura", "sans-serif"],
        alice: ["Alice", "serif"],
      },
      boxShadow: {
        header: `0 0.5rem 2rem ${colors.pink}`,
        drawer: `0 0.125rem 0.5rem ${colors.pink}`,
        input: `0 0 0.625rem ${colors.blue}`,
        card: `0px 0px 10px -2px rgba(0, 0, 0, 0.5)`,
      },
      width: {
        container: "64rem",
        card: "34.375rem",
      },
      minWidth: {
        container: "64rem",
        card: "34.375rem",
      },
      maxWidth: {
        container: "64rem",
        card: "34.375rem",
      },
      translate: {
        input: "1.4rem",
      },
      zIndex: {
        "-10": "-10",
      },
      lineHeight: {
        null: 0,
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["disabled"],
      cursor: ["disabled"],
      borderColor: ["disabled"],
      fontWeight: ["hover"],
    },
  },
  plugins: [],
};

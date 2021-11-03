module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "80vw": "80vw",
      },
      minWidth: {
        "310px": "310px",
      },
      margin: {
        "25px": "25px",
      },
      padding: {
        "25px": "25px",
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};

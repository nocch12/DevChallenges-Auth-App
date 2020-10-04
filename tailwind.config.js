module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      body: ["Noto Sans", "sans-serif"]
    },
    extend: {
      colors: {
        myblack: "#333333",
        myblue: {
          100: "#2F80ED",
          200: "#2D9CDB"
        },
        mygray: {
          100: "#828282",
          200: "#BDBDBD"
        },
        myred: "#EB5757",
      },
    }
  },
  variants: {},
  plugins: []
};

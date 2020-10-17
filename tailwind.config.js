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
        myblack: {
          100: "#333333",
          200: "#4F4F4F",
        },
        myblue: {
          100: "#2F80ED",
          200: "#2D9CDB",
          'dark': '#1F6BD1'
        },
        mygray: {
          100: "#828282",
          200: "#BDBDBD",
          300: "#FAFAFB",
          400: "#E0E0E0",
          500: "#D3D3D3",
          600: "#F2F2F2",
        },
        myred: "#EB5757",
      },
      borderRadius: {
        xl: '12px',
        card: '24px',
      },
      spacing: {
        '14': '3.5rem',
      },
      width: {
        '18': '4.5rem',
      },
      maxWidth: {
        'content': '845px'
      },
      height: {
        '18': '4.5rem',
      },
      inset: {
        '100': '100%'
      },
    }
  },
  variants: {},
  plugins: []
};

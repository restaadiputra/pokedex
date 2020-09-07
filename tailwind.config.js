module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: ['./src/**/*.ts', './src/**/*.tsx'],
  },
  theme: {
    fontFamily: {
      'nunito': ['nunito', 'sans-serif'],
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}

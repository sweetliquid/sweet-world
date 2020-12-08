module.exports = {
  purge: ['./page/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      height: theme => ({
        'screen/2': '50vh',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

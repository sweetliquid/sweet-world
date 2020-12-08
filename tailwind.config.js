const { plugin } = require('postcss')

module.exports = {
  purge: ['./page/**/*.[js|jsx|ts|tsx]', './components/**/*.[js|jsx|ts|tsx]'],
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

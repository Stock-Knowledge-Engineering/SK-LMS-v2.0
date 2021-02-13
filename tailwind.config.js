module.exports = {
  // purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    left: {
      '1': '0.1em',
      '2': '0.2em'
    },
    bottom:{
      '1': '0.1',
      '2': '0.2',
      '3': '0.3',
      '4': '0.4'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

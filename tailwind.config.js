const { colors } = require('tailwindcss/defaulttheme');

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
    top:{
      '1': '0.1',
      '2': '0.2',
      '3': '0.3',
      '4': '0.4'
    },
    screens:{
      'xs' : '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      ...colors,
      heading: '#2b2b2b',
      subheading: '#616161',
      skBlue: '#0080F6'
    },
    extend: {
      width: {
        'height':'100vh'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

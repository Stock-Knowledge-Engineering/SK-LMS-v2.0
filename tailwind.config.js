const { colors, screens } = require('tailwindcss/defaultTheme');

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
      'xs' : {'min':'375px', 'max':'639px'},
      'sm': {'min':'640px', 'max':'767px'},
      'md': {'min':'768px', 'max':'1023px'},
      '1080': '1920px',
      'lg': {'min': '1024px', 'max': '1079px'},
      'reno': {'min':'1080px', 'max': '1279px'},
      ...screens
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
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

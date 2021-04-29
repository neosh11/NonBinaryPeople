module.exports = {
  purge: [
    './components/*.tsx',
    './pages/*.tsx',

    './components/**/*.tsx',
    './pages/**/*.tsx',
    './layouts/**/*.tsx',

    './components/**/**/*.tsx',

    './components/**/**/**/*.tsx',

    './components/**/**/**/**/*.tsx'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      prim: '#ffffff',
      sec: '#9A59CF',
      ter: '#FEF433',
      white: '#ffffff',
      black: '#2D2D2D',

      tex: {
        prim: '#2D2D2D',
        sec: '#000000'
      },

      link: {
        off: '#ffffff',
        on: '#31AFD4'
      },
      transparent: 'transparent',
      red: '#DF2935',
      blue: '#31AFD4',
      gray: {
        hero: '#030306',
        dark: '#141414',
        DEFAULT: '#16151a',
        light: '#1c1b21'
      }
    },
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
      serif: ['Montserrat', 'serif'],
      bubbly: ['Open+Sans', 'sans-serif']
    },
    extend: {
      width: {
        240: '40rem'
      },
      minWidth: {
        'but': '15rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms')]
}

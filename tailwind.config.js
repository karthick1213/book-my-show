module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        navCol:
{
  50: '#f5eef9',
  100: '#dbd0e1',
  200: '#2B3148',
  300: '#aa93b7',
  400: '#9174a2',
  500: '#775a89',
  600: '#5d466b',
  700: '#42334c',
  800: '#281e2f',
  900: '#0f0914',
}
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

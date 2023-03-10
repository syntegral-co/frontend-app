/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // screens: {
    //     sm: '480px',
    //     md: '768px',
    //     lg: '976px',
    //     xl: '1440px',
    // },
    colors: {
      black: '#333',
      white: '#fdfdfd',
      'gray-300': '#AFB8C7',
      'gray-700': '#424A5C',
      'gray-800': '#3a4252',
      'gray-900': '#313947',
      'teal-600': '#00d1c8',
      'teal-800': '#00E5DB',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}

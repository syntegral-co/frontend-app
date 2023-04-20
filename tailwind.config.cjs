/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: {
      purpose: '#9747FF',
      people: '#16FFAC',
      profit: '#FF7E07',
      planet: '#06D7F6',
    },
    fontFamily: {
      sans: ['Jost'],
    },
    extend: {
      animation: {
        loader: 'loader 0.6s infinite alternate',
      },
      keyframes: {
        loader: {
          to: {
            opacity: 0.1,
            transform: 'translate3d(0, -.5rem, 0)',
          },
        },
      },
    },
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: [
      {
        syntegral: {
          primary: '#09E8D3',
          'primary-focus': '#07B8A7',
          'primary-content': '#ffffff',
          accent: '#09E8D3',
          'accent-focus': '#07B8A7',
          'base-100': '#3E3E3E',
          'base-200': '#292726',
          'base-300': '#15191C',
          success: '#00D100',
          error: '#F93608',
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'syntegral',
  },
}

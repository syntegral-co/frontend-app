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
      backgroundImage: {
        'syntegral-face':
          "url('/public/assets/images/syntegral-background.jpg')",
      },
      animation: {
        loader: 'loader 0.6s infinite alternate',
        shine: 'shine 1.2s',
      },
      keyframes: {
        loader: {
          to: {
            opacity: 0.1,
            transform: 'translate3d(0, -.5rem, 0)',
          },
        },
        shine: {
          '100%': { left: '125%' },
        },
      },
    },
  },
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/react-tailwindcss-select/dist/index.esm.js',
  ],
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
          'base-100': '#141C1C',
          'base-200': '#0D1313',
          'base-300': '#0B0F0F',
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

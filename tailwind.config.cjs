/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: {
      purpose: '#9747FF',
      people: '#16FFAC',
      profit: '#FF7E07',
      planet: '#06D7F6',
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
          primary: '#669BD0',
          'primary-focus': '#669BD0',
          'primary-content': '#ffffff',
          secondary: '#4063FF',
          'secondary-focus': '#274BE5',
          'secondary-content': '#B5B5B5',
          accent: '#09E8DE',
          'accent-focus': '#17D4CC',
          'base-100': '#112D49',
          'base-200': '#163A5C',
          neutral: '#2B2C44',
          'neutral-focus': '#171824',
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

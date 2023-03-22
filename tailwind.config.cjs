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
          primary: '#111D35',
          'primary-content': '#c0c0c0',
          secondary: '#334E68',
          accent: '#1c9598',
          neutral: '#575757',
          'neutral-focus': '#000000',
          'base-200': '#102A43',
          'base-100': '#091C2F',
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

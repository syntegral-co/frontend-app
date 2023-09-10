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
        'syntegral-face': "url('/assets/images/syntegral-background.jpg')",
      },
      boxShadow: {
        energy: '-2px 2px 20px -6px rgba(223, 0, 108, 1)',
        health_wellbeing: '-2px 2px 20px -6px rgba(183, 212, 154, 1)',
        innovation: '-2px 2px 20px -6px rgba(244, 154, 33, 1)',
        land_use_ecology: '-2px 2px 20px -6px rgba(71,110,107,1)',
        management: '-2px 2px 20px -6px rgba(91,187,237,1)',
        materials: '-2px 2px 20px -6px rgba(186,32,133,1)',
        pollution: '-2px 2px 20px -6px rgba(169,190,158,1)',
        transportation: '-2px 2px 20px -6px rgba(31,175,182,1)',
        waste: '-2px 2px 20px -6px rgba(158,137,193,1)',
        water: '-2px 2px 20px -6px rgba(184,224,233,1)',
      },
      colors: {
        energy: 'rgba(223, 0, 108, 1)',
        health_wellbeing: 'rgba(183, 212, 154, 1)',
        innovation: 'rgba(244, 154, 33, 1)',
        land_use_ecology: 'rgba(71, 110, 107, 1)',
        management: 'rgba(91, 187, 237, 1)',
        materials: 'rgba(186, 32, 133, 1)',
        pollution: 'rgba(169, 190, 158, 1)',
        transportation: 'rgba(31, 175, 182, 1)',
        waste: 'rgba(158, 137, 193, 1)',
        water: 'rgba(184, 224, 233, 1)',
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
          'accent-2': '#6EC1E3',
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

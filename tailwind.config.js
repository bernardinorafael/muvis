/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'search-dialog-shown': {
          from: { transform: 'translateY(-100%)' },
          to: { transform: 'translateY(0)' },
        },

        'slide-down-fade': {
          from: { transform: 'translateY(8px)' },
          to: { transform: 'translateY(0)' },
        },
      },

      animation: {
        'search-dialog-shown':
          'search-dialog-shown 300ms cubic-bezier(0.16, 1, 0.3, 1)',

        'slide-down-fade': 'slide-down-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },

      lineHeight: {
        'extra-none': 0,
      },
    },

    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
      xs: { max: '439px' },
    },

    boxShadow: {
      '4xl': 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
    },

    fontFamily: {
      styled: 'Montserrat Subrayada',
    },
  },

  plugins: [],
}

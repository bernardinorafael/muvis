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

        'shown-header': {
          from: { transform: 'translateY(-100%)' },
          to: { transform: 'translateY(0)' },
        },
        'sheet-movie-information': {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
      },

      animation: {
        'search-dialog-shown':
          'search-dialog-shown 300ms cubic-bezier(0.16, 1, 0.3, 1)',

        'sheet-movie-information':
          'sheet-movie-information 400ms cubic-bezier(0.16, 1, 0.3, 1)',

        'slide-down-fade': 'slide-down-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)',

        'shown-header': 'shown-header 400ms ease-in-out',
      },

      lineHeight: {
        'extra-none': 0,
      },
    },

    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1200px' },
      lg: { max: '992px' },
      md: { max: '768px' },
      sm: { max: '619px' },
      xs: { max: '419px' },
    },

    boxShadow: {
      '4xl': 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
      '5xl': 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
    },

    fontFamily: {
      styled: 'Montserrat Subrayada',
      sans: 'Inter',
      cursive: 'Bebas Neue',
    },
  },

  plugins: [],
}

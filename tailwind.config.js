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
        searchDialogShown: {
          from: { transform: 'translateY(-100%)' },
          to: { transform: 'translateY(0)' },
        },
      },

      animation: {
        searchMoviesShown: 'searchDialogShown 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },

      lineHeight: {
        'extra-none': 0,
      },
    },
  },

  plugins: [],
}

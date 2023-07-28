/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      fontFamily: {
        roclette: ['var(--font-roclette)'],
        ottenburg: ['var(--font-ottenburg)'],
        rocletteBold: ['var(--font-roclette-bold)'],
        rocletteSBoldItalic: ['var(--font-roclette-sbold)'],
        ottenburgDisplaySBold: ['var(--font-ottenburg-sbold)'],
        economicaBold: ['var(--font-eco-bold)']
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

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

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      'resp': {'max': '815px'},
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

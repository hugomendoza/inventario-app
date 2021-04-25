const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    '.src/**/*.{js.jsx.ts.tsx}',
    './public/index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1920px",
    },
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
        primary: {
          100: '#e2ecef',
          200: '#c6d9df',
          300: '#a9c5d0',
          400: '#8db2c0',
          500: '#709FB0',
          600: '#5a7f8d',
          700: '#4e6f7b',
          800: '#385058',
          900: '#223035',
        },
        secondary: {
          100: '#e3e1ea',
          200: '#c7c3d5',
          300: '#aaa6bf',
          400: '#8e88aa',
          500: '#726a95',
          600: '#5b5577',
          700: '#444059',
          800: '#2e2a3c',
          900: '#17151e',
        },
        terciary: {
          100: '#ecf3f1',
          200: '#d9e6e3',
          300: '#c6dad4',
          400: '#aac7bf',
          500: '#a0c1b8',
          600: '#809a93',
          700: '#60746e',
          800: '#404d4a',
          900: '#202725',
        },
        gray: {
          100: '#eceeef',
          200: '#dadddf',
          300: '#c7ccd0',
          400: '#b5bbc0',
          500: '#A2AAB0',
          600: '#82888d',
          700: '#61666a',
          800: '#414446',
          900: '#202223',
        },
      },
      fontFamily: {
        sansLight: ['ManropeLight', ...defaultTheme.fontFamily.sans],
        sansRegular: ['ManropeRegular', ...defaultTheme.fontFamily.sans],
        sansBold: ['ManropeBold', ...defaultTheme.fontFamily.sans],
        // headline: ['var(--font-family-secondary)',...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xs: 'var(--text-xs)',
        sm: 'var(--text-sm)',
        base: 'var(--text-base)',
        lg: 'var(--text-lg)',
        xl: 'var(--text-xl)',
        '2xl': 'var(--text-2xl)',
        '3xl': 'var(--text-3xl)',
        '4xl': 'var(--text-4xl)',
        '5xl': 'var(--text-5xl)',
        '6xl': 'var(--text-6xl)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwind-css-variables")(
      {
        colors: "color",
        screens: false,
        fontFamily: false,
        fontSize: false,
        fontWeight: false,
        lineHeight: false,
        letterSpacing: false,
        backgroundSize: false,
        borderWidth: false,
        borderRadius: false,
        width: false,
        height: false,
        minWidth: false,
        minHeight: false,
        maxWidth: false,
        maxHeight: false,
        padding: "spacing",
        margin: false,
        boxShadow: false,
        zIndex: false,
        opacity: false,
      }
    )
  ],
}

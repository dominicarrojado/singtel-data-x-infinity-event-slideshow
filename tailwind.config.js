/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Myriad Pro', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      screens: {
        lg: { raw: '(min-width: 1280px) and (min-height: 720px)' },
      },
      colors: {
        'sky-350': 'rgba(59, 152, 180, 1)',
        'sky-550': 'rgba(1, 151, 179, 1)',
        'pink-650': 'rgba(210, 80, 147, 1)',
      },
      keyframes: {
        expand: {
          '0%, 80%, 100%': {
            transform: 'scale(0)',
          },
          '40%': {
            transform: 'scale(1)',
          },
        },
        appear: {
          '0%, 2%, 57%, 100%': {
            opacity: '0',
          },
          '5%, 55%': {
            opacity: '1',
          },
        },
        'slide-up': {
          '0%, 60%, 100%': {
            transform: 'translateY(100%)',
          },
          '5%, 55%': {
            transform: 'translateY(0)',
          },
        },
        'slide-right': {
          '0%, 60%, 100%': {
            transform: 'translateX(-100%)',
          },
          '5%, 55%': {
            transform: 'translateX(0)',
          },
        },
        'slide-down': {
          '0%, 60%, 100%': {
            transform: 'translateY(-100%)',
          },
          '5%, 55%': {
            transform: 'translateY(0)',
          },
        },
        'slide-left': {
          '0%, 60%, 100%': {
            transform: 'translateX(100%)',
          },
          '5%, 55%': {
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        expand: 'expand 1.4s infinite ease-in-out both',
        appear: 'appear 16s infinite linear both',
        'slide-up': 'slide-up 16s infinite ease-out both',
        'slide-right': 'slide-right 16s infinite ease-out both',
        'slide-down': 'slide-down 16s infinite ease-out both',
        'slide-left': 'slide-left 16s infinite ease-out both',
      },
    },
  },
  plugins: [],
};

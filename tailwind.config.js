/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '700px',
      lg: '976px',
      xl: '1200px',
    },
    extend: {
      colors: { 
        primary: '#681aff',
        bgPrimary: '#242424'
      },
      animation: {
        fadeIn: 'fadeIn 3s forwards',
        jumpFromTop: 'jumpFromTop 1s forwards',
        jumpFromBottom: 'jumpFromBottom 2s forwards',
        out: 'out 5s ease-in-out',
        jumpInfinite: 'jumpInfinite 1.5s infinite',
        shine: 'shine 5s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            transform: 'translateX(0)',
            opacity: '0',
          },
          '50%': {
            transform: 'translateX(-50px);',
            opacity: '0'
          },
          '100%': {
            transform: 'translateX(0);',
            opacity: '1'
          }
        },
        jumpFromTop: {
          '0%': {
            transform: 'translateY(0)',
            opacity: '0',
          },
          '50%': {
            transform: 'translateY(-50%);',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0);',
            opacity: '1'
          }
        },
        jumpFromBottom: {
          '0%': {
            transform: 'translateY(0)',
            opacity: '0',
          },
          '30%': {
            transform: 'translateY(80%);',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0);',
            opacity: '1'
          }
        },
        out: {
          '0%': {
            opacity: '0',
          },
          '50%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },
        jumpInfinite: {
          '0%': {
            paddingBottom: '0',
          },
          '50%': {
            paddingBottom: '20px'
          },
          '100%': {
            paddingBottom: '0'
          }
        },
        shine: {
          '0%': {
            backgroundPosition: '-1000px',
          },
          '20%': {
            backgroundPositionn: 'top left',
          },
          '90%': {
            backgroundPosition: 'top right',
          },
          '100%': {
            backgroundPosition: '1000px'
          }
        },
       
      },
    },
  },
  plugins: [],
}


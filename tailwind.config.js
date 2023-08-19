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
      xl: '1140px',
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      dancingScript: ["Dancing Script", "cursive"],
    },
    extend: {
      colors: { 
        primary: '#071b36',
        bgPrimary: '#242424',
        textColor: 'rgb(198, 198, 198)'
      },
      animation: {
        fadeIn: 'fadeIn 3s forwards',
        jumpFromTop: 'jumpFromTop 1s forwards',
        jumpFromBottom: 'jumpFromBottom 2s forwards',
        out: 'out 5s ease-in-out',
        jumpInfinite: 'jumpInfinite 1.5s infinite',
        shine: 'shine 1s',
        meteorEffect: "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-1100px)",
            opacity: 0,
          },
        },
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
            marginLeft: '0',
          },
          '50%': {
            marginLeft: '10px'
          },
          '100%': {
            marginLeft: '0'
          }
        },
        shine: {
          "100%": { left: "125%" },
        },
      },
    },
  },
  plugins: [],
}


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
        jumpInfinite: 'jumpInfinite 1.5s infinite',
      },
      keyframes: {
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
      },
    },
  },
  plugins: [],
}


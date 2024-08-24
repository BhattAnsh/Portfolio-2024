/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#1F1E1E',
        'bg-glass': 'rgba(255, 255, 255, 0.2)',
      },
      linearGradients: {
        'bg-top': ['180deg', '#0e1016 0%', 'transparent 50%'],
        'bg-bottom': ['0deg', '#0e1016 0%', 'transparent 100%'],
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },

  },
  safelist:[
    'from-[#C93301]',
    'from-[#3803A6]',
  ],
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'neon': '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.8), 0 0 30px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.8), 0 0 50px rgba(0, 255, 255, 0.8)',
        'blood': '0 0 10px rgba(160, 35, 52, 0.8), 0 0 20px rgba(160, 35, 52, 0.8), 0 0 30px rgba(160, 35, 52, 0.8), 0 0 40px rgba(160, 35, 52, 0.8), 0 0 50px rgba(160, 35, 52, 0.8)',
      },
      colors: {
        'blood': '#A02334'
      },
      keyframes: {
        circle: {
          '0%': { backgroundColor: '#e3bdc2' },
          '25%': { backgroundColor: '#d0919a' },
          '50%': { backgroundColor: '#bd6571' },
          '75%': { backgroundColor: '#aa3948' },
          '100%': { backgroundColor: '#90202f' },
        },
      },
      animation: {
        circle: 'circle 3s linear infinite alternate',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './main.js', '.src/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      colors: {
        primaryColor: '#f8f8f8',
      },
    },
    extend: {
      height: {
        '90vh': '90vh',
        '80vh': '80vh',
      },
    },
  },
  plugins: [],
};

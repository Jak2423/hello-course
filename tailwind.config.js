/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'Roboto-Mono': ['Roboto Mono', 'monospace'],
      },
      backgroundColor: {
        'dog-white': '#f5f0e9',
      },
      boxShadow: {
        listShadow: '1px 3px 5px rgba(0,0,0,0.1)',
      },
      gridTemplateRows: {
        layout: 'auto auto 1fr',
      },
      textColor: {
        'dog-blue': '#4c79e5',
      },
      gridTemplateRows: {
        sticky: 'auto 1fr auto',
      },
    },
  },
  plugins: [],
};

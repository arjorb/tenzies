/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: {
          100: '#0B2434',
        },
        secondary: {
          100: '#F5F5F5',
        },
      },
      colors: {
        dark: {
          100: '#2B283A',
          200: '#4A4E74',
        },
      },
      spacing: {
        85: '21.25rem',
      },
    },
  },
  plugins: [],
};

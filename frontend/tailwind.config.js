/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
      colors: {
        'back-main': '#f0f0f0',
        error: {
          DEFAULT: '#ef4444'
        }
      }
    }
  },
  plugins: []
};

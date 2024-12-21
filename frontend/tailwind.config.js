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
        'bg-primary': '#f0f0f0',
        'bg-secondary': '#f0f2f4',
        'btn-primary': '#3c8eef',
        primary: '#1c1c1c',
        secondary: '#868686',
        'secondary-light': '#EFF2F3',
        error: {
          DEFAULT: '#ef4444'
        }
      }
    }
  },
  plugins: []
};

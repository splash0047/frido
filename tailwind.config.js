/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef9ff',
          100: '#dcf3ff',
          200: '#b3e7ff',
          300: '#66d5ff',
          400: '#1cbeff',
          500: '#00a3ff',
          600: '#0083db',
          700: '#0068b2',
          800: '#005694',
          900: '#004879',
        },
        accent: {
          50: '#fff1f3',
          100: '#ffe4e8',
          200: '#ffccd5',
          300: '#ffa3b5',
          400: '#ff758c',
          500: '#ff4d6a',
          600: '#ff1f47',
          700: '#ff0033',
          800: '#cc0029',
          900: '#a30021',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(to right bottom, rgba(0, 131, 219, 0.8), rgba(255, 31, 71, 0.8))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
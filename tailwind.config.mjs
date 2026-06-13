/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', '"EB Garamond"', 'Georgia', 'serif'],
        garamond: ['"EB Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: {
          50:  '#f4f7fb',
          100: '#e8eef5',
          200: '#cdd9e8',
          300: '#adc0d6',
          400: '#84a2bc',
          500: '#5e83a0',
          600: '#3f6480',
          700: '#2d4f68',
          800: '#1c3347',
          900: '#0e1e2e',
        },
      },
    },
  },
  plugins: [],
};

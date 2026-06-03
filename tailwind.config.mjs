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
          50:  '#faf9f7',
          100: '#f3f0eb',
          200: '#e8e3da',
          300: '#d8d4cc',
          400: '#c0bbb0',
          500: '#a8a398',
          600: '#888880',
          700: '#5a5850',
          800: '#3a3830',
          900: '#1a1a18',
        },
      },
    },
  },
  plugins: [],
};

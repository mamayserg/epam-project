module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        gray: {
          100: '#888888',
          200: '#555555',
          300: '#424242',
          400: '#606060',
          500: '#232323',
          600: '#080707'
        },
        red: {
          100: '#F65261'
        }
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}

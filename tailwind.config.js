/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './app/**/*.{js,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter-Regular', 'sans-serif'],
        medium: ['Inter-Medium', 'sans-serif'],
        semiBold: ['Inter-SemiBold', 'sans-serif'],
        bold: ['Inter-Bold', 'sans-serif'],
      },
      colors: {
        primary: "#4f46e5"
      },
    },
  },
  plugins: [],
};

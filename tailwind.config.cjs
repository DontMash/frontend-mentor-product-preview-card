/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,svelte}",
  ],
  theme: {
    extend: {},
    colors: {
      'dark-cyan': '#3c8067',
      'cream': '#f2ebe3',

      'dark-dark-blue': '#1c232b',
      'dark-grayish-blue': '#6c7289',
      'white': '#ffffff',
    },
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
      'fraunces': ['Fraunces', 'serif'],
    },
  },
  plugins: [],
};

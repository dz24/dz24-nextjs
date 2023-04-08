/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
	      "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '992px',
      'xl': '1140px',
      '2xl': '1200px',
    },
  },
}

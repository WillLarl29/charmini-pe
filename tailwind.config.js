/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charmini: {
          blue: '#CBE2E2',
          'blue-light': '#EBF5F5',
          'blue-dark': '#93BFC0',
          cream: '#FFEFC5',
          'cream-light': '#FFF8E7',
          'cream-dark': '#F5DC9A',
          black: '#000000',
          gray: '#222222',
          'gray-light': '#F8F9FA',
          accent: '#FF6B8B' // subtle secondary badge highlight if needed
        }
      },
      fontFamily: {
        sans: ['Fredoka', 'Quicksand', 'Outfit', 'sans-serif'],
        display: ['Fredoka', 'Outfit', 'sans-serif']
      },
      boxShadow: {
        'kawaii': '0 8px 30px rgba(0, 0, 0, 0.08), 0 4px 10px rgba(203, 226, 226, 0.4)',
        'kawaii-hover': '0 15px 35px rgba(0, 0, 0, 0.12), 0 8px 15px rgba(203, 226, 226, 0.6)',
        'pop': '4px 4px 0px #000000'
      },
      borderRadius: {
        '3xl': '1.75rem',
        '4xl': '2.5rem'
      }
    },
  },
  plugins: [],
}

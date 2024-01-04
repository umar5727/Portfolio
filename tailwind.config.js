/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'primary': 'rgba(6, 106, 201, 1)', //#066ac9
        'primary': 'rgba(0, 62, 41, 1)',
        'primarydark': 'rgba(0, 62, 41, 1)',
        'primary-dark': '#121212',       //dark mode body backgound 
        'primary-light': 'rgba(0, 62, 41, 0.1)',
        'lightgray': 'rgb(211,211,211)',
        'primary-text-normal-dark': '#789786',        
        'primary-danger': 'rgba(214, 41, 62, 1)',        
        'primary-orange': 'rgb(253, 126, 20)',
      },
      transitionProperty: {
        'height': 'height',
      },
      flex: {
        '0': '0 0 auto',
      },
      spacing: {
        '2px': '0.125rem',
        '5px': '0.3rem',
        '128': '32rem',
        '144': '36rem',

      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'custom': '0 0 20px 0px rgba(29,58,83,0.15)',
        'more': '0 2 20px rgba(29,58,83,0.25)',
        'custom3': '0 0 5px rgba(29,58,83,0.35), -1px -1px 5px rgba(29,58,83,0.35)',
      },
    },
  },
  plugins: [],
}


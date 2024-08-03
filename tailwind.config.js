/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',  // ya da dosyalarınızın bulunduğu uygun yol
  ],
  theme: {

    container: {
      center: true,
    },

    extend: {  
      fontFamily: {
        gemunu: ['Montserrat', 'sans-serif'],
      },

      colors: {
        'gega-yazi': '#ffff',
        'gega-ic': '#393E46',
        'gega-arkaplan': '#1E2022',
        'gega-baslik': '#5C5470', 
        // 4D4BCA 615EFC 
      },
    },
  },
  plugins: [],  
}



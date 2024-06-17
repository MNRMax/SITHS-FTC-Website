export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:  {
        poppins: ['Poppins']
      },
      backgroundImage: {
        'triangles': "url('https://svgur.com/i/17LY.svg')"
      }
    },
  },
  plugins: [],
}
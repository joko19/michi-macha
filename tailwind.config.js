/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom': "url('../public/img/bg-min.png')",
      },
      fontFamily: {
        bubblegum: ["Bubblegum"],
        bubblegumSans: ["BubblegumSans"],
      },
      colors: {
        custom: {
          blue: '#99C1F5',
          gray: '#646D71',
          yellow: '#FFE878',
          red: '#F0A08E'
        }
      },
    },
  },
  plugins: [],
}

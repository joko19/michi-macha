/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom': "url('../public/img/bg-min.png')",
        'mobile': "url('../public/img/bg.png')",
        'whitepaper': "url('../public/img/whitepaper.svg')",
        'footer': "url('../public/img/footer.svg')",
      },
      fontFamily: {
        bubblegum: ["Bubblegum"],
        bubblegumSans: ["BubblegumSans"],
        perpetua: ["Perpetua"],
        pertibd: ["Pertibd"],
        pertili: ["Pertili"],
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

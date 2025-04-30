/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    extend: {
      colors : {
        'main-color':{
          '50':'#f6f7f6',
          '100':'#e6e6e1',
          '200':'#c9ccc3',
          '300':'#9ba092',
          '400':'#828879',
          '500':'#676d5f',
          '600':'#52574a',
          '700':'#43473e',
          '800':'#383b34',
          '900':'#30332e',
          '950':'#191b18',
        },
        'second-color':{
          '50':'#fcf8ee',
          '100':'#f5ecd0',
          '200':'#eeddac',
          '300':'#e0bd69',
          '400':'#d9a846',
          '500':'#d08b30',
          '600':'#b86d27',
          '700':'#995024',
          '800':'#7d4023',
          '900':'#673620',
          '950':'#3b1a0d',
        },
        'final-color':{
          '50':'#f7f7ef',
          '100':'#e9ead7',
          '200':'#d7d7b1',
          '300':'#c0bd84',
          '400':'#aea661',
          '500':'#9f9353',
          '600':'#887946',
          '700':'#6e5e3a',
          '800':'#5d4f36',
          '900':'#483c2c',
          '950':'#2e251a',
        }
      },
      fontFamily:{
        'titling':['Cinzel','sans-serif'],
        'texting':['Lora','sans-serif'],
        'final':['Quicksand','serif']
      }
    },
  },
  plugins: [],
}

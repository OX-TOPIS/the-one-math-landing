/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tonedark1: '#252432', // สีแรกที่คุณให้มา
        tonedark2: '#4E47FF', // สีที่สองที่คุณให้มา
        tonelight1: '#F5F8FF', // สีที่สองที่คุณให้มา
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite', // หมุนช้า 3 วินาที
      },
    },
  },
  plugins: [],
}


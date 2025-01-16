import { text } from 'stream/consumers';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {

        background1: '#14161b',

        card1: '#FFFFFF',


        color1: '#070a0c ',
        color2: '#14161b ',
        color3: '#2a2a31 ',
        color4: '#424a47',
        color5: '#6a6d69',

        text1: '#FFFFFF',
        text2: '#333333',

        contrast1:'#00b0ff',
        contrast2:'#ff7139',
        contrast3:'#006099',

        contrast1_hover:'#0090df',
        contrast2_hover:'#ff5c00',


      },
    },
  },
  plugins: [],
};

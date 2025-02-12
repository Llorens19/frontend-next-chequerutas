module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background1: 'var(--background1)',
        header: 'var(--header)',
        card1: 'var(--card1)',
        color1: 'var(--color1)',
        color2: 'var(--color2)',
        color3: 'var(--color3)',
        color4: 'var(--color4)',
        color5: 'var(--color5)',
        text1: 'var(--text1)',
        text2: 'var(--text2)',
        text3: 'var(--text3)',
        text4: 'var(--text4)',
        contrast1: 'var(--contrast1)',
        contrast2: 'var(--contrast2)',
        contrast3: 'var(--contrast3)',
        contrast1_hover: 'var(--contrast1-hover)',
        contrast2_hover: 'var(--contrast2-hover)',
      },
    },
  },
  plugins: [],
};

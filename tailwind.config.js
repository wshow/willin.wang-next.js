const path = require('path');

const fromRoot = (p) => path.join(__dirname, p);

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        current: 'currentColor'
      }
    }
  },
  content: [fromRoot('./src/**/*.+(js|ts|tsx|mdx|md)')],
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ['cyberpunk', 'retro']
  }
};

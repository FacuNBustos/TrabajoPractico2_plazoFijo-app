module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'card' : '49rem',
      },
      gridTemplateColumns: {
        'article': '1fr 2fr',
        'review': '1fr 28px',
      },
      gridTemplateRows: {
        'article': '7fr 3fr',
        'aaa' : '1fr 5px'
      },
    },
    minWidth: {
      'card': '180px',
    }
  },
  plugins: [],
}
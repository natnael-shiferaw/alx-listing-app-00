module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens:{
        sm: '390px', // Mobile
        md: '1024px', // Tablet
        lg: '1728px', // Large screens
      },
      colors: {
        'primary-green': '#34967C',
        'secondary-orange': '#FFA800',
      }
    },
  },
  plugins: [],
}
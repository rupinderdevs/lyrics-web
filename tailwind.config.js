module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {     
      colors: {
        shade: {    
          current: 'currentColor',
          white: '#ffffff',
          blue: '#052341',
          red: '#e56f73'
        }
      }
    }
  },
  plugins: [],
  variants: {
    width: ["responsive", "hover", "focus"]
}
}

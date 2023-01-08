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
          red: '#c02026'
        }
      }
    }
  },
  plugins: [],
  variants: {
    width: ["responsive", "hover", "focus"]
}
}

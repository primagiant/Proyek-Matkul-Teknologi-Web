const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        pacifico: "'Pacifico', cursive",
        quicksand: "'Quicksand', sans-serif",
      },
      colors: {
        transparent: 'transparent',
        primary: "#000000",
        secondary: "#150050",
        ternary: "#3F0071",
        side: "#610094",
      },
      boxShadow: {
        sideShadow: "0px 100px 80px rgba(255, 255, 255, 0.07), 0px 69.4124px 33.4221px rgba(255, 255, 255, 0.0722119), 0px 63.236px 17.869px rgba(255, 255, 255, 0.06085), 0px 60.231px 10.0172px rgba(255, 255, 255, 0.0442305), 0px 55.634px 5.32008px rgba(255, 255, 255, 0.0278113), 0px 43.9817px 2.21381px rgba(255, 255, 255, 0.0130285)",
        navShadow: "0px 62px 80px rgba(255, 255, 255, 0.07), 0px -7.39438px 53.1473px rgba(255, 255, 255, 0.0227032), 0px -26.0025px 58.3013px rgba(255, 255, 255, 0.0150943), 0px -34.7065px 65.4348px rgba(255, 255, 255, 0.0131308), 0px -36.6941px 69.9683px rgba(255, 255, 255, 0.0130725), 0px -31.526px 65.9187px rgba(255, 255, 255, 0.0122554)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

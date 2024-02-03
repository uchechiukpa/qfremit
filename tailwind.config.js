/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      maincolor: "#e67b3b",
      white: "#ffffff",
      brown: '#522A1C9C',
      yellow: "#F2994A",
      green: "#6FCF97",
      blue: "#2D9CDB",
      paleyellow:"#F2994A"

    },
    screens: {
      sm: {max: "789px"},

      md: {min: "790px" , max: "1023px"},

      lg: {min:"1024px"},
    },
    fontFamily: {
      manrope: ["Manrope"],
      montserrat: ["Montserrat"],
      serif: [ "ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
      sans: ["Helvetica", "Arial", "sans-serif"]
    },

    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },

    boxShadow: {
      '3xl': '0px 4px 4px rgba(0, 0, 0, 0.25)',
    }

    // extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      bricolage: ['"Bricolage Grotesque"', "sans-serif"],
      montserrat: ['"Montserrat"', "sans-serif"],
    },
    colors: {
      primary: "#ffffff",
      secondary: "#F05537",
      textColor: "#1E0A3C",
      sup:"#0124E9",
      border:"#DBDAE3",
      iconColor:"#4B4D63",
    },
  },
  plugins: [typography],
};

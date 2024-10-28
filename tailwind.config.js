/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Sen"],
    },
    fontSize: {
      xs: "10px",
      sm: "14px",
      base: "16px",
      base1: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "28px",
      "4xl": "36px",
      "5xl": "48px",
      "6xl": "56px",
    },
    colors: {
      "x-black": "#232536",
      "x-blue": "#075EFD",
      "x-yellow": "#FFD050",
      "x-darkgrey": "#4C4C4C",
      "x-mediumgrey": "#6D6E76",
      "x-lightgrey": "#F4F4F4",
      "x-lavender": "#F4F0F8",
      "x-lightyellow": "#FBF6EA",
      "x-light": "#FFFFFF",
      "x-light-yellow": "#FBF6EA",
      "x-Lavender": "#F4F0F8",
    },
  },
  plugins: [require("daisyui")],
};

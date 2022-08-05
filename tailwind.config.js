/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Silkscreen"],
      },
      colors: {
        "cotton-candy": "#FFCBE6",
        "cherry-blossom": "#FFEEF7",
        "baby-blue": "#CEE5FF",
      },
    },
  },
};

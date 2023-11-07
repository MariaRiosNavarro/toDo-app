/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["cupcake", "night", "retro"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};

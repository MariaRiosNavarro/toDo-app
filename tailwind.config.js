/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      "cupcake",
      {
        night: {
          ...require("daisyui/src/theming/themes")["[data-theme=night]"],
          primary: "#65C3C7",
          secondary: "#EE9FBC",
          accent: "#EDAF3A",
        },
      },
      "retro",
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};

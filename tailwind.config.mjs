/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      primary: "#010f1a",
      secondary: "#03121e",
      warning: "#FFC107",
      ...colors,
    },
  },
  plugins: [],
};

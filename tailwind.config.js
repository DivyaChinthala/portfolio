/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          text: "#FFFFFF", // White Text
          primary: "#8DBF41", // "#3498DB", // Blue
          secondary: "#2ECC71", // Green
          accent: "#ff2b64", // Red
          neutral: "#BDC3C7", // Light Gray,
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

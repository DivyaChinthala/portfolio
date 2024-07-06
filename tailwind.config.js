/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#0f172a", // Dark Navy
        lightText: "#cbd5e1", // Light Gray
        boxBg: "linear-gradient(145deg, #0d1a2b, #1b2b3d)", // Dark Navy Gradient
        designColor: "#ff4500", // Orange Red
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #0d1a2b, -10px -10px 19px #1b2b3d",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          text: "#E0E7FF", // Very Light Blue
          primary: "#6C63FF", // Purple
          secondary: "#5CDB95", // Light Green
          accent: "#FF652F", // Bright Orange
          neutral: "#A5B1C2", // Gray
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

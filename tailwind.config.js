/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideInFull: {
          "0%": { width: "0%", height: "100vh", padding: 0 },
          "100%": { width: "100%", height: "100vh", padding: 0 },
        },
        slideIn: {
          "0%": { width: "0%", height: "100vh", padding: 0 },
          "100%": { width: "28%", height: "100vh", padding: 0 },
        },
        slideOut: {
          "0%": { width: "28%", height: "100vh", padding: 0 },
          "100%": { width: "0%", height: "100vh", padding: 0 },
        },
      },
      animation: {
        slideInFull: "slideInFull 0.5s ease-in-out forwards",
        slideIn: "slideIn 0.5s ease-in-out forwards",
        slideOut: "slideOut 0.5s ease-in-out backwards",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};

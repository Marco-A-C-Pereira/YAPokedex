/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        open: "open 0.5 ease-out",
      },
      keyframes: {
        open: {
          "0%": { "max-height": "0%" },
          "100%": { "max-height": "100%" },
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      animation: {
        fade: "fade 500ms ease-in-out",
        rotate: "rotate 150ms ease-in-out",
      },
      keyframes: {
        fade: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        rotate: {
          from: {
            transform: "rotate(240deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
      },
      colors: {
        "main-color": "#70757a",
      },
    },
  },
  plugins: [],
};

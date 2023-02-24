/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */

const range = (s = 0, e) => Array.from({ length: e - s }, (_, i) => s + i);

const pxToRem = (px, base = 16) => `${px / base}rem`;

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        labtop: "915px",
      },
      spacing: {
        ...range(1, 100).reduce((acc, px) => {
          acc[`${px}pxr`] = pxToRem(px);
          return acc;
        }, {}),
        labtop: "915px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar-hide"),
  ],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", ".src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "peach-bg": "#f4a384",
        "bg-card": "#acfffc",
        "light-yellow-card": "#e7d889",
      },
    },
  },
  plugins: [],
};

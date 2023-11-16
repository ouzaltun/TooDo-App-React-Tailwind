/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "custom-bg": "#faf3e0",
        "custom-main": "#eabf9f",
        "custom-second": "#b68973",
      },
      color: {
        "custom-text": "#1e212d",
      },
    },
  },
  plugins: [],
};

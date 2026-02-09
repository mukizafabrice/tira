/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "tira-primary": "#00a6a6",
        "tira-secondary": "#f5a623",
        "tira-dark": "#1a1a1a",
        "tira-light": "#f8f9fa",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "turo-card": "0 2px 8px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};

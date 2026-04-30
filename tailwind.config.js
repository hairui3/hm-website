/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        display: ["Sora", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Noto Sans", "Helvetica", "Arial", "sans-serif"],
        body: ["Manrope", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Noto Sans", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        bg: "hsl(var(--bg) / <alpha-value>)",
        ink: "hsl(var(--ink) / <alpha-value>)",
        muted: "hsl(var(--muted) / <alpha-value>)",
        line: "hsl(var(--line) / <alpha-value>)",
        glass: "hsl(var(--glass) / <alpha-value>)",
        brand: "hsl(var(--brand) / <alpha-value>)",
        aqua: "hsl(var(--aqua) / <alpha-value>)",
      },
      boxShadow: {
        glow: "0 0 0 1px hsl(var(--line) / 0.9), 0 20px 80px hsl(var(--brand) / 0.10)",
        soft: "0 20px 60px -25px rgba(15, 23, 42, 0.25)",
      },
    },
  },
  plugins: [],
};

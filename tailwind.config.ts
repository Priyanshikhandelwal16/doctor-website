import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1628",
          50: "#E8EDF5",
          100: "#C5D0E3",
          200: "#9BAEC9",
          300: "#718CAF",
          400: "#4D6F96",
          500: "#2E527D",
          600: "#1A3A5C",
          700: "#122844",
          800: "#0A1628",
          900: "#060E18",
        },
        medical: {
          white: "#FAFBFD",
          blue: "#4A90D9",
          "blue-light": "#E8F2FC",
          "blue-soft": "#B8D4F0",
          silver: "#C0C8D4",
          "silver-light": "#E8ECF1",
        },
        accent: {
          red: "#E63946",
          green: "#2A9D8F",
          gold: "#C9A227",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      animation: {
        "pulse-heart": "pulseHeart 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s ease-out forwards",
      },
      keyframes: {
        pulseHeart: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.05)", opacity: "0.85" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        premium: "0 4px 30px rgba(10, 22, 40, 0.08)",
        "premium-lg": "0 10px 60px rgba(10, 22, 40, 0.12)",
        glow: "0 0 40px rgba(74, 144, 217, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;

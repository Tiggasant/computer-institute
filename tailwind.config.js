/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0F1E33",
          50: "#EEF2F7",
          100: "#D7E0EB",
          400: "#3D5675",
          600: "#1F3A5F",
          700: "#16283F",
          900: "#0F1E33",
        },
        signal: {
          DEFAULT: "#0EA5A0",
          50: "#E7FBFA",
          100: "#CDF5F3",
          300: "#5BCFC9",
          500: "#0EA5A0",
          600: "#0B8A86",
          700: "#086B68",
        },
        spark: {
          DEFAULT: "#F5A623",
          50: "#FEF6E9",
          400: "#F7B84D",
          500: "#F5A623",
          600: "#D98C0F",
        },
        paper: "#F7F9FC",
        slate: {
          ink: "#334155",
        },
      },
      fontFamily: {
        display: ["Sora", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        card: "0 4px 16px -4px rgba(15,30,51,0.10), 0 2px 6px -2px rgba(15,30,51,0.06)",
        cardHover: "0 12px 28px -8px rgba(15,30,51,0.18), 0 4px 10px -4px rgba(15,30,51,0.08)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(rgba(14,165,160,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,160,0.08) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "28px 28px",
      },
      animation: {
        caret: "caret 1s steps(1) infinite",
        "fade-up": "fadeUp 0.6s ease-out both",
      },
      keyframes: {
        caret: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(14px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

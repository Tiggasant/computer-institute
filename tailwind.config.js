/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "2rem",
      },
      screens: {
        "2xl": "1320px",
      },
    },

    extend: {
      /* ===========================
         COLORS
      =========================== */

      colors: {
        transparent: "transparent",
        current: "currentColor",

        paper: "#F8FAFC",

        ink: {
          DEFAULT: "#0F172A",
          50: "#F8FAFC",
          100: "#E2E8F0",
          200: "#CBD5E1",
          300: "#94A3B8",
          400: "#64748B",
          500: "#475569",
          600: "#334155",
          700: "#1E293B",
          800: "#0F172A",
          900: "#020617",
        },

        signal: {
          DEFAULT: "#14B8A6",
          50: "#F0FDFA",
          100: "#CCFBF1",
          200: "#99F6E4",
          300: "#5EEAD4",
          400: "#2DD4BF",
          500: "#14B8A6",
          600: "#0D9488",
          700: "#0F766E",
          800: "#115E59",
          900: "#134E4A",
        },

        spark: {
          DEFAULT: "#F59E0B",
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
        },

        success: "#22C55E",
        danger: "#EF4444",
        warning: "#F59E0B",
      },

      /* ===========================
         TYPOGRAPHY
      =========================== */

      fontFamily: {
        display: [
          "Sora",
          "system-ui",
          "sans-serif",
        ],

        body: [
          "Inter",
          "system-ui",
          "sans-serif",
        ],

        mono: [
          "JetBrains Mono",
          "monospace",
        ],
      },

      /* ===========================
         FONT SIZE
      =========================== */

      fontSize: {
        hero: [
          "4.5rem",
          {
            lineHeight: "1.05",
            fontWeight: "800",
          },
        ],

        display: [
          "3rem",
          {
            lineHeight: "1.1",
          },
        ],

        section: [
          "2.2rem",
          {
            lineHeight: "1.2",
          },
        ],
      },

      /* ===========================
         BORDER RADIUS
      =========================== */

      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.5rem",
        xl4: "2rem",
        hero: "2.5rem",
      },

      /* ===========================
         SHADOWS
      =========================== */

      boxShadow: {
        card:
          "0 10px 35px rgba(15,23,42,.08)",

        cardHover:
          "0 18px 45px rgba(15,23,42,.15)",

        glow:
          "0 0 35px rgba(245,158,11,.25)",

        glass:
          "0 8px 32px rgba(0,0,0,.12)",
      },

      /* ===========================
         BACKDROP
      =========================== */

      backdropBlur: {
        xs: "2px",
      },

      /* ===========================
         BACKGROUND
      =========================== */

      backgroundImage: {
        heroOverlay:
          "linear-gradient(to right, rgba(2,6,23,.92), rgba(2,6,23,.55), rgba(2,6,23,.25))",

        darkOverlay:
          "linear-gradient(to top, rgba(2,6,23,.9), rgba(2,6,23,.3), transparent)",

        premium:
          "linear-gradient(135deg,#0F172A,#1E293B)",

        sparkGradient:
          "linear-gradient(135deg,#FBBF24,#F59E0B)",

        signalGradient:
          "linear-gradient(135deg,#2DD4BF,#0D9488)",

        mesh:
          "radial-gradient(circle at top left,rgba(245,158,11,.18),transparent 45%), radial-gradient(circle at bottom right,rgba(20,184,166,.18),transparent 45%)",
      },

      /* ===========================
         TRANSITION
      =========================== */

      transitionTimingFunction: {
        smooth:
          "cubic-bezier(.22,.61,.36,1)",
      },

      /* ===========================
         KEYFRAMES
      =========================== */

      keyframes: {
        float: {
          "0%,100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-12px)",
          },
        },

        fadeUp: {
          from: {
            opacity: 0,
            transform:
              "translateY(30px)",
          },

          to: {
            opacity: 1,
            transform:
              "translateY(0)",
          },
        },

        zoom: {
          from: {
            transform: "scale(1)",
          },

          to: {
            transform: "scale(1.06)",
          },
        },

        pulseGlow: {
          "0%,100%": {
            opacity: ".35",
          },

          "50%": {
            opacity: "1",
          },
        },

        marquee: {
          from: {
            transform:
              "translateX(0)",
          },

          to: {
            transform:
              "translateX(-50%)",
          },
        },
      },

      /* ===========================
         ANIMATION
      =========================== */

      animation: {
        float:
          "float 6s ease-in-out infinite",

        fadeUp:
          "fadeUp .8s ease forwards",

        zoom:
          "zoom 20s linear infinite alternate",

        glow:
          "pulseGlow 2.5s ease infinite",

        marquee:
          "marquee 30s linear infinite",
      },
    },
  },

  plugins: [],
};
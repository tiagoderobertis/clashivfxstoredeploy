import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        xs: "480px", // Breakpoint personalizado para pantallas extra pequeñas
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#FF7200",
          foreground: "#FFE8CD",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#1A1A1A",
          foreground: "#FFE8CD",
        },
        accent: {
          DEFAULT: "#FF7200",
          foreground: "#FFE8CD",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        cream: "#FFE8CD",
        discord: {
          primary: "#5865F2",
          secondary: "#7289DA",
          dark: "#36393F",
          nightBlue: "#0A1929",
          mediumBlue: "#1A237E", // Azul oscuro pero no tanto como el azul noche
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "orange-gradient": "linear-gradient(to bottom, #000000, #FF7200)",
        "orange-gradient-right": "linear-gradient(to right, #000000, #FF7200)",
        "discord-gradient": "linear-gradient(to bottom, #5865F2, #7289DA)",
        "discord-gradient-right": "linear-gradient(to right, #5865F2, #7289DA)",
        "night-blue-gradient": "linear-gradient(to top, #000000, #0A1929)",
        "black-to-blue-gradient": "linear-gradient(to bottom, #000000, #1A237E)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config


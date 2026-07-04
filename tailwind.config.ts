import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FBF6EF",
          dark: "#F3EADC",
        },
        blush: {
          50: "#FDF3F3",
          100: "#FAE4E3",
          200: "#F5CBCB",
          300: "#EDA9AC",
          400: "#E28588",
          500: "#D3646A",
          600: "#B94A52",
        },
        sage: {
          50: "#F2F5EE",
          100: "#E3EADA",
          200: "#C9D8B8",
          300: "#AAC194",
          400: "#8BA872",
          500: "#6F8D57",
        },
        clay: {
          50: "#FAF5EF",
          100: "#F1E4D4",
          200: "#E0C9AC",
          300: "#C9A57C",
          400: "#A9805A",
          500: "#7C5C3E",
          900: "#3A2E22",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 30px -8px rgba(122, 92, 62, 0.18)",
        card: "0 4px 20px -4px rgba(122, 92, 62, 0.12)",
      },
      borderRadius: {
        xl2: "1.75rem",
      },
      backgroundImage: {
        grain: "url('/images/texture-grain.svg')",
      },
    },
  },
  plugins: [],
};

export default config;

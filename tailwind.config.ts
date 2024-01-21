import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#D5F8E7",
          100: "#ADF1CF",
          200: "#84EAB7",
          500: "#07B25D",
          600: "#0DFF87",
        },
        secondary: {
          50: "#E3E0F2",
          100: "#C7C1E5",
          200: "#ABA2D8",
          400: "#2C2258",
          500: "#5845B1",
          600: "#1D173B",
        },
      },
      spacing: {
        wrapper: "1rem",
        "wrapper-md": "1.7rem",
        "wrapper-lg": "3.7rem",
        "wrapper-xl": "5rem",
        "wrapper-3xl": "8rem",
      },
      screens: {
        "3xl": "1536px",
        "4xl": "2560px",
      },
      backgroundImage: {
        "desktop-hero-bg": "url('/desktop-hero-image.png')",
        "mobile-hero-bg": "url('/mobile-hero-image.png')",
        "footer-bg": "url('/footer-bg.png')",
        "auth-bg-pattern": "url('/auth-bg-pattern.svg')",
      },
    },
  },
  plugins: [],
};
export default config;

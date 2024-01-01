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
          600: "#0DFF87",
        },
        secondary: {
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
        "wrapper-xl": "5rem",
      },
      screens: {
        "4xl": "2560px",
      },
      backgroundImage: {
        "desktop-hero-bg": "url('/desktop-hero-image.svg')",
      },
    },
  },
  plugins: [],
};
export default config;

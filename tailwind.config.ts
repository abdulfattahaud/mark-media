import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        grayC: "var(--grayC)",
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
        syne: ["Syne", "sans-serif"],
      },
      height: {
        svh: "calc(var(--vh)*100)",
      },
      screens: {
        sm: "768px",
        md: "993px",
        lg: "1200px",
        xl: "1440px",
        xx: "1920px",
      },
    },
  },
  plugins: [],
} satisfies Config;

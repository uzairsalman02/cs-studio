import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--canvas)",
        surface: {
          DEFAULT: "var(--surface)",
          hover: "var(--surface-hover)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          rgb: "rgba(var(--primary-rgb), <alpha-value>)",
        },
        analogy: {
          DEFAULT: "var(--analogy)",
          rgb: "rgba(var(--analogy-rgb), <alpha-value>)",
        },
        tech: {
          DEFAULT: "var(--tech)",
          rgb: "rgba(var(--tech-rgb), <alpha-value>)",
        },
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        border: "var(--border)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        urdu: ["var(--font-urdu)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

export default {
  darkMode: 'class', 
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        background: 'rgb(var(--background))',
        'background-dark': 'rgb(var(--background))',
      },
      textColor: {
        foreground: 'rgb(var(--foreground))',
        'foreground-dark': 'rgb(var(--foreground))',
      },
    },
  },
  plugins: [],
} satisfies Config;
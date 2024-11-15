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
      colors: {
        background: '#f9f9f9',
        'background-dark': '#1a1a1a',
        foreground: '#333333',
        'foreground-dark': '#ffffff',
      },
    },
  },
  plugins: [],
} satisfies Config;
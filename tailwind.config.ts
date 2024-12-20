import type { Config } from "tailwindcss";

export default {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			animation: {
				"slide-right": "slideRight 1.5s ease-in-out forwards",
				fadeIn: "fadeIn 0.7s ease-in-out forwards",
			},
			keyframes: {
				slideRight: {
					"0%": { transform: "translateX(-100%)" },
					"100%": { transform: "translateX(0)" },
				},
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
			},
			backgroundColor: {
				background: "rgb(var(--background))",
				"background-dark": "rgb(var(--background))",
				"green-load": "green",
			},
			textColor: {
				foreground: "rgb(var(--foreground))",
				"foreground-dark": "rgb(var(--foreground))",
			},
			backgroundImage: {
				"gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
} satisfies Config;

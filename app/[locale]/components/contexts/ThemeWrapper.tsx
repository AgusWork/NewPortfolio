"use client";

import { useTheme } from "@/app/[locale]/components/contexts/DarkThemeContext";
import { ReactNode } from "react";

export default function ThemeWrapper({ children }: { children: ReactNode }) {
	const { theme } = useTheme();

	return (
		<div
			className={`${
				theme === "dark" ? "dark" : ""
			} min-h-screen bg-background text-foreground transition-colors duration-300 dark:bg-background-dark dark:text-foreground-dark`}
		>
			{children}
		</div>
	);
}

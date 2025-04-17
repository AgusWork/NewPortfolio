"use client";

import { useTheme } from "@/app/[locale]/components/contexts/DarkThemeContext";
import Head from "next/head";
import { ReactNode } from "react";

export default function ThemeWrapper({ children }: { children: ReactNode }) {
	const { theme } = useTheme();

	return (
		<>
		<Head>
		  <script
			dangerouslySetInnerHTML={{
			  __html: `
				window.onload = function() {
				  window.scrollTo(0, 0);
				};
			  `,
			}}
		  />
		</Head>
	 
		<div
			className={`${
				theme === "dark" ? "dark" : ""
			} min-h-screen bg-background text-foreground transition-colors duration-300 dark:bg-background-dark dark:text-foreground-dark`}
		>
			{children}
		</div>
		</>
	);
}

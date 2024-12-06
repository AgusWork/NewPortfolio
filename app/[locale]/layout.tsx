import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "./components/contexts/DarkThemeContext";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./globals.css";
import { SubHeader } from "./components/ui";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default async function RootLayout({
	children,
	params: { locale },
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	if (!routing.locales.includes(locale as any)) {
		notFound();
	}
	const messages = await getMessages();

	return (
		<html lang={locale}>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen text-black bg-neutral-50 bg-[radial-gradient(ellipse_80%_80%_at_50%-20%,rgba(245,222,179,.40),rgba(139,69,19,.20))]  transition-colors duration-300 dark:text-white dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%80%_at_50%-20%,rgba(0,128,255,.20),rgba(255,255,255,0))]`}
			>
				<NextIntlClientProvider messages={messages}>
					<ThemeProvider>
						<SubHeader style="h-[10vh] py-6" />
						{children}
					</ThemeProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}

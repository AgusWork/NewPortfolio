import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "./components/contexts/DarkThemeContext";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { notFound } from "next/navigation";
import { Locale, locales } from "@/i18n/routing";
import { SubHeader } from "./components/ui";
import "./globals.css";

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

type RootLayoutProps = {
  children: React.ReactNode;
  params: { locale: Locale };
};

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
	const messages = (await import(`../../messages/${params.locale}.json`)).default;
	const t = (key: string) => {
	  const keys = key.split('.');
	  return keys.reduce((obj, key) => obj && obj[key], messages) || key;
	};

  return {
    title: t("Sections.Layout.title"),
    description: t("Sections.Layout.description"),
  };
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = params;
  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = useMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} w-screen overflow-x-hidden antialiased relative min-h-screen text-black bg-neutral-50 bg-[radial-gradient(ellipse_80%_80%_at_50%-20%,rgba(245,222,179,.40),rgba(139,69,19,.20))]  transition-colors duration-300 dark:text-white dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%80%_at_50%-20%,rgba(0,128,255,.20),rgba(255,255,255,0))]`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <SubHeader />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}


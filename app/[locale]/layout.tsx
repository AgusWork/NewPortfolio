import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { ThemeProvider } from "./components/contexts/DarkThemeContext"
import { NextIntlClientProvider, useMessages } from "next-intl"
import { notFound } from "next/navigation"
import { type Locale, locales } from "@/i18n/routing"
import { SubHeader } from "./components/ui"
import "./globals.css"
import  SchemaOrgJsonLd  from "./components/SEO/SchemaOrgJsonLd";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

type RootLayoutProps = {
  children: React.ReactNode
  params: { locale: Locale }
}

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const messages = (await import(`../../messages/${params.locale}.json`)).default
  const t = (key: string) => {
    const keys = key.split(".")
    return keys.reduce((obj, key) => obj && obj[key], messages) || key
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://portfolio-agustin-cordoba.vercel.app/es"

  const keywords = t("SEO.keywords")

  const languageAlternates: Record<string, string> = {}
  locales.forEach((loc) => {
    languageAlternates[loc] = `${baseUrl}/${loc}`
  })

  return {
    title: {
      default: t("Sections.Layout.title"),
      template: `%s | ${t("Sections.Layout.title")}`,
    },
    description: t("Sections.Layout.description"),
    keywords: keywords,
    authors: [{ name: t("Sections.Layout.name"), url: baseUrl }],
    creator: t("Sections.Layout.name"),
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/${params.locale}`,
      languages: languageAlternates,
    },
    openGraph: {
      type: "website",
      locale: params.locale,
      url: baseUrl,
      title: t("Sections.Layout.title"),
      description: t("Sections.Layout.description"),
      siteName: t("Sections.Layout.title"),
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: t("SEO.ogImageAlt"),
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/FotoCV1-circular2.png",
      apple: "/FotoCV1-circular2.png",
    },
    verification: {
      google: "google-site-verification=Tj2wqjwzBQBJU2E7l0y2cpkfRwr2VIQO21RUiBvOPOw",
    },
  }
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = params
  if (!locales.includes(locale)) {
    notFound()
  }
  const messages = useMessages()

  return (
    <html lang={locale}>
      <head>
        {locales.map((loc) => (
          <link
            key={loc}
            rel="alternate"
            hrefLang={loc}
            href={`${process.env.NEXT_PUBLIC_BASE_URL || "https://portfolio-agustin-cordoba.vercel.app"}/${loc}${locale === loc ? "" : ""}`}
          />
        ))}
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`${process.env.NEXT_PUBLIC_BASE_URL || "https://portfolio-agustin-cordoba.vercel.app"}/en`}
        />
        <meta name="google-site-verification" content="gPEdabqzq0hDEBeqeHVduisv_RuWRTXzkpvCKgubc8o" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} w-screen overflow-x-hidden antialiased relative min-h-screen text-black bg-neutral-50 bg-[radial-gradient(ellipse_80%_80%_at_50%-20%,rgba(245,222,179,.40),rgba(139,69,19,.20))]  transition-colors duration-300 dark:text-white dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%80%_at_50%-20%,rgba(0,128,255,.20),rgba(255,255,255,0))]`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <SchemaOrgJsonLd locale={locale} />
            <SubHeader />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

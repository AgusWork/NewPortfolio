"use client"

import { useState, useEffect, type ReactNode, type ButtonHTMLAttributes } from "react"
import { Menu, Moon, Sun, Calendar } from "lucide-react"
import { useTheme } from "@/app/[locale]/components/contexts/DarkThemeContext"
import { useTranslations } from "next-intl"
import { usePathname } from "next/navigation"
import dynamic from "next/dynamic"

const SlideOutMenu = dynamic(() => import("../../SlideOutMenu"), {
  ssr: false,
})

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link"
  size?: "sm" | "md" | "lg" | "icon"
  children: ReactNode
  className?: string
}

const Button = ({ children, variant = "default", size = "md", className = "", ...props }: ButtonProps) => {
  let buttonClasses =
    "font-medium transition-all duration-200 flex items-center justify-center backdrop-blur-md rounded-md"

  if (variant === "default") {
    buttonClasses +=
      " bg-gradient-to-r from-teal-500/90 to-teal-400/90 text-white hover:from-teal-600 hover:to-teal-500"
  } else if (variant === "outline") {
    buttonClasses += " bg-black/20 border border-white/20 text-white hover:border-teal-500 hover:text-teal-500"
  } else if (variant === "ghost") {
    buttonClasses += " bg-black/20 text-white hover:text-teal-500"
  } else if (variant === "link") {
    buttonClasses += " bg-black/20 text-white hover:text-teal-500"
  }

  if (size === "sm") {
    buttonClasses += " text-sm px-3 py-1.5"
  } else if (size === "md") {
    buttonClasses += " px-4 py-2"
  } else if (size === "lg") {
    buttonClasses += " text-lg px-5 py-2.5"
  } else if (size === "icon") {
    buttonClasses += " p-2"
  }

  buttonClasses += ` ${className}`

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  )
}

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const languages = [
    { code: "es", name: "ES" },
    { code: "en", name: "EN" },
  ]

  const currentLang = pathname.startsWith("/en") ? "en" : "es"

  return (
    <div className="relative">
      <button
        className="px-2 py-1 text-white font-medium transition-colors hover:text-teal-500 backdrop-blur-md bg-black/20 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {currentLang.toUpperCase()}
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 overflow-hidden z-50 min-w-[80px] bg-black/70 backdrop-blur-md rounded-md">
          {languages.map((lang) => (
            <a
              key={lang.code}
              href={`/${lang.code}${pathname.substring(3)}`}
              className={`block px-4 py-2 text-center text-white hover:bg-teal-500/20 transition-colors ${
                currentLang === lang.code ? "text-teal-500" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              {lang.name}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export function ClientSubHeaderActions() {
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const t = useTranslations("Components.SubHeader")
  const pathname = usePathname()

  const [links, setLinks] = useState<{ name: string; href: string }[]>([])

  useEffect(() => {
    const section = pathname.includes("projects") ? "projects" : "home"
    const currentKeys =
      section === "projects"
        ? ["about", "gallery", "languages", "relatedProjects", "contact"]
        : ["about", "work", "practice", "languages", "contact"]

    const newLinks = currentKeys.map((key) => ({
      name: t(`links.${section}.${key}.name`),
      href: t(`links.${section}.${key}.href`),
    }))

    setLinks(newLinks)
  }, [pathname, t])

  return (
    <>
      <div className="flex items-center justify-center gap-2">
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>

        <LanguageSwitcher />

        <a
          href="https://cal.com/agustin-maria-cordoba/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-1.5 px-3 py-1 text-white hover:text-teal-500 transition-colors backdrop-blur-md bg-black/20 rounded-md"
        >
          <Calendar className="h-4 w-4" />
          <span>{t("heading")}</span>
        </a>

        <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(true)}>
          <Menu className="h-5 w-5" />
        </Button>
      </div>
      <SlideOutMenu links={links} isOpen={isMenuOpen} onCloseAction={() => setIsMenuOpen(false)} />
    </>
  )
}

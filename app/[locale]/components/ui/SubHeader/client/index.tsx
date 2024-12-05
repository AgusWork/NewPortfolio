"use client";

// ClientSubHeaderActions.tsx
import { useState } from "react";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "@/app/[locale]/components/contexts/DarkThemeContext";
import { Button, LanguageSwitcher, SlideOutMenu } from "../../../ui";
import { useTranslations } from "next-intl";

export function ClientSubHeaderActions() {
	const { theme, toggleTheme } = useTheme();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("Components.SubHeader");
  const keys = ['about', 'works', "projects", "languages", 'contact'] as const;

	const links = keys.map((key) => ({
		name: t(`links.${key}.name`),
		href: t(`links.${key}.href`),
	}));

	return (
		<>
			<div className="flex items-center gap-2 md:gap-4">
				<Button variant="outline" onClick={toggleTheme}>
					{theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
				</Button>
				<Button className="hidden md:block" variant="outline">
					{t("heading")}
				</Button>
				<LanguageSwitcher />
				<button
					className="border border-teal-500 py-2 px-3 text-teal-500 rounded-lg hover:bg-white"
					onClick={() => setIsMenuOpen(true)}
				>
					<Menu className="h-6 w-6" />
				</button>
			</div>
			<SlideOutMenu links={links} isOpen={isMenuOpen} onCloseAction={() => setIsMenuOpen(false)} />
		</>
	);
}

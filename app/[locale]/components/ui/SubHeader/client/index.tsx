"use client";

import { useState, useEffect } from "react";
import { Menu, Moon, Sun } from 'lucide-react';
import { useTheme } from "@/app/[locale]/components/contexts/DarkThemeContext";
import { Button, LanguageSwitcher,  } from "../../../ui";
import {  useTranslations } from "next-intl";
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';

const SlideOutMenu = dynamic(() => import('../../SlideOutMenu'), {
  ssr: false,
});



export function ClientSubHeaderActions() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("Components.SubHeader");
  const pathname = usePathname();

  const [links, setLinks] = useState<{ name: string; href: string }[]>([]);

  useEffect(() => {
      const section = pathname.includes('projects') ? 'projects' : 'home';
      const currentKeys = section === 'projects'
          ? ['about', 'gallery', 'languages', 'relatedProjects', 'contact']
          : ['about', 'work', 'practice', 'languages', 'contact'];
  
      const newLinks = currentKeys.map((key) => ({
          name: t(`links.${section}.${key}.name`),
          href: t(`links.${section}.${key}.href`),
      }));
  
      setLinks(newLinks);
  }, [pathname, t]);
  
  return (
    <>
      <div className="flex items-center gap-2 md:gap-4">
        <Button variant="outline" onClick={toggleTheme}>
          {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
        <a href="https://cal.com/agustin-maria-cordoba/30min" target="_blank">
        <Button className="hidden md:block" variant="outline">
          {t("heading")}
        </Button>
        </a>
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

